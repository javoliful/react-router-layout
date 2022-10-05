import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { routes, RouteWithSubRoutes } from "./route/routes";

export default function Main() {
  return (
    <Router>
      <Switch>
        {routes &&
          routes.length &&
          routes.map((route, i) => {
             console.log('Main Principal: ' + route.path);
            return <RouteWithSubRoutes key={i} {...route} />;
          })}
      </Switch>
    </Router>
  );
}
