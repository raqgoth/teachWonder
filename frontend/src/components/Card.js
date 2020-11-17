import React,{ useEffect, useState } from "react";

const Card = () => {
    const [comment,setComment] = useState(false);

    useEffect(()=>{
    });

    const sendComment = ()=>{
        alert('funciona!');
    }

    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-sm-8 row">
                   <div className="col-sm-4 text-center">
                        <span className="material-icons avatar-icon">account_circle</span>
                   </div>
                   <div className="col-sm-8">
                        <span>Username</span><br/>
                        <span>YYYY-MM-DD</span>
                   </div>
                </div>
                <div className="col-sm-4 p-2 text-right">
                    <button type="button" className="btn btn-primary btn-sm mr-2">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
            <h5 className="card-title p-2">Card title</h5>
            <p className="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="text-right p-2">
              { comment==false? (
                  <button type="button" className="btn btn-success btn-sm" onClick={()=>{ setComment(true); }} >add comment</button>
              ):(
                <button type="button" className="btn btn-danger btn-sm" onClick={()=>{ setComment(false); }} >cancel comment</button>
              ) }
            </div>
            <div className="card">
                {comment? (
                    <div className="p-2" >
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-success" type="button" onClick={()=>{ sendComment(); }}   >send</button>
                            </div>
                        </div>
                    </div>
                ) : ('')}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item text-center"><button type="button" className="btn btn-info btn-sm">view more...</button></li>
                </ul>
            </div>
            
        </div>
    );
}
  
export default Card;



