import React from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import { AdminUser } from '../pages/AdminUser'

export const Router = () => {
    return (
        <Switch>
            {/* <Route exact path="/" component={Login} /> */}
            <Route exact path="/" component={Dashboard} />
            <Route path="/users" component={Users} />
            <Route path="/addUsers" component={AdminUser} />
        </Switch>
    )
}