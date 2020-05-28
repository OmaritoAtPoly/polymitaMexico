import React from "react";
import { Route, Switch } from "react-router-dom";
import { AddUserForm } from "../AddUserForm";
import Users from "../pages/Users";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Users} />
      <Route path="/add-users" component={AddUserForm} />
    </Switch>
  );
};
