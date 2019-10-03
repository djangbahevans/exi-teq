import React from "react";
import Homepage from "./pages/Homepage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loginpage from "./pages/Login";
import Signuppage from "./pages/Signup";


export default () => (
  <BrowserRouter>
    <Switch>
      <Route component={Homepage} path="/" exact />
      <Route component={Loginpage} path="/signin" exact />
      <Route component={Signuppage} path="/signup" exact />
    </Switch>
  </BrowserRouter>
);