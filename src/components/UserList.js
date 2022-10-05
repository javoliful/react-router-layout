import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../route/routes";

export default function UserList({ route}) {
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
        {routes && routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}