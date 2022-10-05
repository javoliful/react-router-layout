import React from "react";
import { Link } from "react-router-dom";

export default function LayoutOneColumn({ route, parentRoutes }) {  
  return (
    <React.Fragment>    
      <div className='login'> 
       <h1>Login</h1>
       <ul>
       <li><Link to='/admin'> Admin Zone </Link></li>
       <li><Link to='/'> User Zone </Link></li>
       </ul>
       </div>
    </React.Fragment>     
  );
}
