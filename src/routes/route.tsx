import React from "react";
import { Route, Switch } from "react-router-dom";
import { AdminUser } from "../pages/AdminUser";
import Users from "../pages/Users";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Users} />
      <Route path="/admin-users" component={AdminUser} />
    </Switch>
  );
};
