import React from "react";
import { Switch} from "react-router-dom";
import { RouteWithSubRoutes } from "../../route/routes";
export default function MainLayout({route}) {
    const {
    routes,  
  } = route;
  const parentRoutes = route.routes;
     return (
        <Switch>
          {routes.map((route, i) => {
            console.log('Main Layout: '+ route.path)
           return  <RouteWithSubRoutes key={i} {...route} parentRoutes={parentRoutes}/>
          })}
          {/* {props.route.path==='/'? <Redirect to="/overview" />:null}  */}
        </Switch>
  );
}
