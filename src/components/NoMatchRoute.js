import React from "react";
import {
  useLocation,Redirect
} from "react-router-dom";


export default function NoMatchRoute() {
  let location = useLocation();

  return (
    <Redirect to='/mainnomachroute' origin={location}/>
    // <div>
    //   <h3>
    //     No match for <code>{location.pathname}</code>
    //   </h3>
    // </div>
  );
}
