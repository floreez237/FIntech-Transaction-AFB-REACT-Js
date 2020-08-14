import React from 'react';
import './Sign in.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Caurie from './Cauries.png';
import {Link} from "react-router-dom";

class SignIn extends React.Component{

    render() {
        return (
            <div className="container">
                <div className="img">
                    <img src={Caurie}/>
                </div>
                <div className="login-content">
                    <Form>
                        <img src="Afriland logo.png"/>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Link to='/dashboard'><Button variant="primary" type="submit">
                            Login
                        </Button></Link>
                    </Form>
                </div>
            </div>
        );
    }

}
export default SignIn;