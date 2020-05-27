import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Login from '../pages/Login';
import Users from '../pages/Users';
import { AddUserForm } from '../AddUserForm';
import Dashboard from '../pages/Dashboard';

export const Router = () => {
    return (
        <Switch>
            {/* <Route exact path="/" component={Login} /> */}
            <Route exact path="/" component={Dashboard}/>
            <Route path="/users" component={Users} />
            <Route path="/addUsers" component={AddUserForm} />
        </Switch>
    )
}