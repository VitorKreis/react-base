import React from "react";
import { Switch } from "react-router-dom";

import PrivateRoutes from "./PrivateRoute";
import Login from "../pages/login";
import Page404 from "../pages/Page404";

export default function Rotas() {
  return (
    <Switch>
      <PrivateRoutes exact path="/" component={Login} />
      <PrivateRoutes path="*" component={Page404} />
    </Switch>
  );
}
