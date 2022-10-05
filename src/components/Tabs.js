import React from "react";
import { Link } from "react-router-dom";
export default function Tabs({routes, roleType}) {  
  return (
    <header>
        <div className='login'>
        <Link to="/login"> Go to Login</Link>
        </div>
        <ul>
          {Array.isArray(routes) && routes.length > 0  && routes.map((route, i) => (
            route.data.visible && route.data.role===roleType  && <li key={i}>
              <Link to={`${route.url}`}>{route.data.label}</Link>
            </li>
          ))}
        </ul>

    </header>
  );
}
