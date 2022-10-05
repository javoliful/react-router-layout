import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// import { scroller } from "react-scroll";

export default function Menu({ routes, path }) {
  let history = useHistory();
  // let location = useLocation();


useEffect(()=>{
  routes.map((route, i) => {
    route.routes.map((route, i) => {
      React.createRef(route.data.key);
      return null;
    })
    return null;
  }

  )

  

},[routes])

  const scrollTo = (where, url) => {
    // const urlParentGo = url.split("/")[2];
    // const urlParentCurrent = location.pathname.split("/")[2];
    // if (urlParentGo !== urlParentCurrent) {
      history.push(url);
    // } else {
      // scroller.scrollTo(where, {
      //   duration: 800,
      //   delay: 0,
      //   smooth: "easeInOutQuart",
      //   containerId: "containerElement"
      // });
    // }
  };

  return (
    <aside>
      {routes && routes.length > 1 ? (
        <ul>
          {routes.map((route, i) => (
            route.data.visible && <li key={i}>
              <Link to={`${route.url}`}>{route.data.label}</Link>
              <ul>
                {route.routes.map((route, i) => (
                  route.data.visible && <li key={i}>
                    <div
                      className="test1"
                      onClick={() => scrollTo(route.data.key, route.url)}
                    >
                      {route.data.label}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </aside>
  );
}
