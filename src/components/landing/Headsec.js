import React from 'react';
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


function Headsec(){
    return (
        <div id="showcase">
            <h1>Welcome To The Beach</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita
                ullam.
            </p>
            <span>
                <Link className="button" to="/signin">Sign In</Link>
                <Link className="button" to="/signup">Sign Up</Link>
            </span>
        </div>
    );
}

export default Headsec;