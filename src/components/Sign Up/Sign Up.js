import React from 'react';
import './Sign Up.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Caurie from './Cauries.png';
import {Link} from "react-router-dom";

class SignUp extends React.Component{

    render() {
        return(
            <div className="container">
                <div className="img">
                    <img src={Caurie}/>
                </div>
                <div className="login-content">
                    <Form>
                        <img src="Afriland logo.png"/>
                        <Form.Group controlId="formUserName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" />
                        </Form.Group>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="username" placeholder="Enter Phone Number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Link to='/dashboard'><Button variant="primary" type="submit">
                            Register
                        </Button></Link>
                    </Form>
                </div>
            </div>
        );
    }
}

export default SignUp;