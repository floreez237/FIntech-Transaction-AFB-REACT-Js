import {Route, Switch,Redirect} from 'react-router-dom';
import React from 'react';
import Landing from "../components/landing/Landing";
import SignIn from "../components/Sign in/Sign in";
import SignUp from "../components/Sign Up/Sign Up";
import Dashboard from "../components/dashboard/Dashboard";

export default class RouteWrapper extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/home" component={Landing}/>
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route>
                        <Redirect to="/home"/>
                    </Route>
                </Switch>
            </div>
        );
    }

}