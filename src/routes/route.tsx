import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Login from '../pages/Login';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
        </Switch>
    )
}