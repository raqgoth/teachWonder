import React,{ useEffect, useState } from "react";
import { Form } from 'react-final-form';
import { useHistory } from "react-router-dom";

import PostService from "../services/PostService";
import NavBar from "../components/NavBar";
import CustomField from "../components/CustomField";

const validators = (value)=> {
    const errors = {}

    if (!value.title) {
        errors.title = 'Title is required'
    }
    if (!value.content) {
        errors.content = 'Description is required'
    }
    if (!value.author) {
        errors.author = 'Username is required'
    }

    return errors
}


const EditPost = (props) => {
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState('');
    const [post,setPost] = useState({});
    const history = useHistory();
    const {match:{params}} = props;

    useEffect(() => {
        PostService.getById(params.postId) 
        .then(res=>{
            setPost({
                title:res.data.title,
                content:res.data.content,
                author:res.data.author,
            });            
        });

     }, []);

    const onSubmit = values=>{
       const {title,content,author} = values;
        setLoading(true);
        PostService.update(params.postId,{title,content,author})
        .then(res=>{
            setLoading(false);
            setMessage(res.data.message);
            setInterval(function(){ 
                history.push('/');
            },2000);
        });
    }

    return (
        <div className="Post">
            <NavBar title="Post" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        { message!==''? (<div className="alert alert-success" >{message}</div>) :''}
                        <h3>Edit post</h3>
                        <Form
                        initialValues={post}
                        validate={validators}
                        onSubmit={onSubmit}
                        render={(formProps) =>(
                            <div>
                                <CustomField name="title"   inputType="text" label="Title"   placeholder="Title..."  />
                                <CustomField name="content" inputType="textarea" label="Content"   placeholder="Content..." />
                                <CustomField name="author" inputType="text" label="Author"   placeholder="Author..." />
                                <button type="submit" className="btn btn-success" onClick={formProps.handleSubmit} disabled={loading}>
                                    {loading ? ('Updating post...'): ('Update')}
                                </button>
                            </div>
                            
                        )}
                        />  
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default EditPost;