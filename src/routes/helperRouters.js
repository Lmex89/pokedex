import {Redirect,Route} from "react-router-dom/cjs/react-router-dom.min";

import React from "react";

export const PublicRoute = ({component,...options})=> {
  const isAuth = false;
  if (!isAuth) {
    return <Route {...options} component={component}/>
  } 
   
  return <Redirect to="/"/>

}
