import React from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { PublicRoute } from "./helperRouters";

import PokedexContainer from "../components/PokedexContainer";


const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/" component={PokedexContainer}/>
    </Switch>)
}

export default PublicRoutes;

