import React from 'react';
import { Route, Switch } from "react-router-dom";
import { AddUserForm } from '../AddUserForm';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/users" component={Users} />
            <Route path="/addUsers" component={AddUserForm} />
        </Switch>
    )
}