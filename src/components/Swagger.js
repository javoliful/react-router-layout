import React from "react";
import { Switch, Link } from "react-router-dom";
import { RouteWithSubRoutes } from "../route/routes";

export default function Swagger({ route }) {
  const {
    routes,
    path,
    data: { label }
  } = route;
  return (
    <div>
      <h3> Label : {label}</h3>
      <h3> Path : {path}</h3>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}
