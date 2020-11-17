import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
const Home = () => {
    const posts = ['one','two','three'];
    return (
        <div className="Home">
            <NavBar title="Home" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        {posts.map(item => (<Card />) )}                       
                       
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Home;