import React from "react";
import { Redirect } from 'react-router-dom';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { PublicRoute } from "./helperRouters";

import PokedexContainer from "../components/PokedexContainer";


const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute  path="/" component={PokedexContainer} />
      <Redirect path="*" to="/"/>
    </Switch>)
}

export default PublicRoutes;

