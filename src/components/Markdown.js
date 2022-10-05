import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import useFetch from "use-http";

export default function Markdown({ route }) {
  const {
    routes,
    path,
    data: { label }
  } = route;

  const { anchor } = useParams();
  const options = {};
  const { loading, error, data = [] } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    options,
    []
  );

  useEffect(() => {
    //console.log('Anchor ' + anchor)
    !loading && anchor && scrollTo(anchor);
  }, [anchor, loading]);

  const scrollTo = where => {
    scroller.scrollTo(where, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      containerId: "containerElement"
    });
  };

  return (
    <div>
      {error && "Error!"}
      {loading && "Loading..."}

      <h3> Label : {label}</h3>
      <h3> Path : {path}</h3>
      {/* <h3> Anchor : {anchor}</h3> */}
      <Element
        name="container"
        className="element"
        id="containerElement"
        style={{
          position: "relative",
          height: "300px",
          overflow: "scroll",
          marginBottom: "100px"
        }}
      >
        <div id="lipsum">
          {!loading &&
            routes.map((route, i) => (
              <Element key={i} name={`${route.data.key}`} className="element">
                <h3>{`${route.data.label}`}</h3>
                {data.map(user => (
                  <div key={user.id}>{user.title}</div>
                ))}
                {/* <TextComponent label={`${route.data.label}`} /> */}
              </Element>
            ))}
        </div>
      </Element>
    </div>
  );
}
