import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';


export default class Dashboard extends React.Component {
    render() {
        return (
            <div className= "div-cs">
                <button className="btn-in">
                    Cash-In
                </button>
                <span>
                 <button className="btn-out">
                     Cash-Out
                 </button>
             </span>
            </div>

        );
    }

}