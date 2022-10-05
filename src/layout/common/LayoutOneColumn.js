import React from "react";
import Header from "./section/Header";
import Main from "./section/Main";
import Footer from "./section/Footer";
import Tabs from "../../../components/Tabs";
export default function LayoutOneColumn({ route, parentRoutes }) {
  const {
    routes   
  } = route;
  return (
    <React.Fragment>     
    <Header><Tabs routes={parentRoutes} roleType={'user'}/></Header>    
    <Main routes={routes} />  
    <Footer routes={routes} />
</React.Fragment>     
  );
}
