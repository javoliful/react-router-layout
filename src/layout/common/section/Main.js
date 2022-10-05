import React from "react";
import {  Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../../route/routes";
export default function Main({ routes }) {
  return (
    <main>
      <Switch>
      {routes.map((route, i) => {
       // console.log('Main dentro : ' + route.path);
        return <RouteWithSubRoutes key={i} {...route} />;
      })}
      </Switch>
    </main>
  );
}
