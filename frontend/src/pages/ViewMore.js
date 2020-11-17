import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
const ViewMore = () => {
    return (
        <div className="ViewMore">
             <NavBar title="View more" />
             <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">                        
                        <Card />
                    </div>
                </div>
             </div>
        </div>
    );
}
  
export default ViewMore;