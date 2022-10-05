import React, { useEffect, useState, Suspense } from "react";
import { routes as initialRoutes, ordered } from "./route/routes";
import Main from "./Main";

export default function App() {
  const [routes, setRoutes] = useState(null);  
  useEffect(() => {
    initialRoutes[0].routes.sort(ordered);
    setRoutes(initialRoutes);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main routes={routes} />
    </Suspense>
  );
}
