import React from 'react';
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sectinc() {
    return (
        <div id="cont">
            <ul id="contact">
                <li id="foo_li">
                    <p><i class="fa fa-map-marker fa-3x"></i></p>
                    <p><strong>Lorem Ipsum Ltd.</strong><br/>Random str. 8, Pellenstique
                </p>
            </li>
            <li id="foo_li">
                <p><i class="fa fa-phone fa-3x"></i></p>
                <p><strong>Phone</strong><br/>00 55 (20) 3334 4444</p>
            </li>
        <li id="foo_li">
            <p><i class="fa fa-envelope fa-3x"></i></p>
        <p><strong>Email</strong><br/>office@loremipsum.com</p>
    </li>
    </ul>
    </div>
);
}

export default Sectinc;