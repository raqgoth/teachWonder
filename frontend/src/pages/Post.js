import React from "react";
import NavBar from "../components/NavBar";

const Post = () => {
    return (
        <div className="Post">
            <NavBar title="Post" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        <h3>New post</h3>                        
                        <form>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Description</label>
                                <textarea className="form-control">

                                </textarea>
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Post;