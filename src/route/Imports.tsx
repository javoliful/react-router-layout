import { lazy } from "react";
const Overview = lazy(() => import("../components/Overview"));
const Swagger = lazy(() => import("../components/Swagger"));
const Markdown = lazy(() => import("../components/Markdown"));
const Dashboard = lazy(() => import("../components/Dashboard"));
const Login = lazy(() => import("../components/Login"));
const UserList = lazy(() => import("../components/UserList"));
const NoMatchRoute = lazy(() => import("../components/NoMatchRoute"));
const MainNoMatchRoute = lazy(() => import("../components/MainNoMatchRoute"));

const MainLayout = lazy(() => import("../layout/common/MainLayout"));
const LayoutOneColumn = lazy(() => import("../layout/common/LayoutOneColumn"));
const LayoutTwoColumn = lazy(() => import("../layout/common/LayoutTwoColumn"));


export {
  Overview,
  Swagger,
  MainLayout,
  Markdown,
  Dashboard,
  LayoutOneColumn,
  LayoutTwoColumn,
  Login,
  UserList,
  NoMatchRoute,
  MainNoMatchRoute
};
