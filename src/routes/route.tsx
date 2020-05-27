import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Login from '../pages/Login';
import Users from '../pages/Users';
import { AddUserForm } from '../AddUserForm';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/users" component={Users} />
            <Route path="/addUsers" component={AddUserForm} />
        </Switch>
    )
}


