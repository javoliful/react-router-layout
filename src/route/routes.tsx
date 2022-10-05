import React from "react";
import { Route } from "react-router-dom";
import * as components from "./Imports";
import routesAuto from "./routesAuto";
import routesStatic from "./routesStatic";
import {AareonRoute} from "./AareonRoute";
// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
// Recuerda tipar las funciones de esta forma, que es cómo lo hacemos en asp
//ok gracias grack

export const RouteWithSubRoutes: React.FC<AareonRoute> = (route) => {
  return route.path ?
    (<Route
      path={route.path}
      exact={route.exact}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component
          {...props}
          route={route}
          parentRoutes={route.parentRoutes}
        />
      )}
    />) : null
};

export function ordered(a, b) {
  if (a.data.order > b.data.order) {
    return 1;
  }
  if (a.data.order < b.data.order) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.

export const subRoutes = [...routesStatic, ...routesAuto];

export const routes = [
 
  {
    path: "/",
    url: "/",    
    component: components.MainLayout,
    data: { label: "index" },
    routes: [...subRoutes]
  },
  
];
export default routes;
