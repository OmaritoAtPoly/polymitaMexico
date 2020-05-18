import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Redirect from="*" to='/login'/>
        </Switch>
    )
}