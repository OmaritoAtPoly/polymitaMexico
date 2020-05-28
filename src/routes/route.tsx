import React from "react";
import { Route, Switch } from "react-router-dom";
import { AdminUser } from "../pages/AdminUser";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/" component={Users} />
      <Route path="/add-users" component={AdminUser} />
    </Switch>
  );
};
