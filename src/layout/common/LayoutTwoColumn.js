import React from "react";
import Header from "./section/Header";
import Main from "./section/Main";
import Aside from "./section/Aside";
import Footer from "./section/Footer";
import Menu from "../../../components/Menu";
import Tabs from "../../../components/Tabs";
export default function LayoutTwoColumn({ route, parentRoutes }) {
  const {
    routes   
  } = route;
  return (
    <React.Fragment>     
        <Header><Tabs routes={parentRoutes} roleType={route.data.role} /></Header>    
        <Main routes={routes} />
        <Aside><Menu routes={routes} /></Aside>
        <Footer routes={routes} />
    </React.Fragment>     
  );
}
