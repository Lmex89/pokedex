import React from "react";
import { Redirect } from 'react-router-dom';
import { PublicRoute } from "./helperRouters";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Pokedex from '../components/Pokedex';
import Login from '../components/login';

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route path="/">
          <Login />
        </Route>
        
          <PublicRoute exact path="/" component={Login} />
          <Redirect path="/**/**" to="/**"/>
        
      </Switch>
    </Router>)
}

export default PublicRoutes;

