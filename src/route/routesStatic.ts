import * as components from "./Imports";
const routesStatic = [
  {
    path: "/dashboard",
    url: "/dashboard",
    component: components.LayoutOneColumn,
    data: {
      label: "Dashboard",
      key: "",
      order: 3,
      visible: true,
      role: "user"
    },
    routes: [
      {
        path: "/dashboard",
        url: "/dashboard",
        exact: true,
        component: components.Dashboard,
        data: {
          label: "Dashboard",
          key: "",
          order: 0
        },
        routes: []
      }
    ]
  },
  {
    path: "/login",
    url: "/login",
    component: components.Login,
    data: {
      label: "Login",
      key: "",
      order: 0,
      visible: false,
      role: "public"
    },
    routes: []
  },
  {
    path: "/admin",
    url: "/admin",
    component: components.LayoutTwoColumn,
    data: {
      label: "Users",
      key: "",
      order: 3,
      visible: true,
      role: "admin"
    },
    routes: [
      {
        path: "/admin",
        url: "/admin",
        exact: true,
        component: components.UserList,
        data: {
          label: "User List",
          key: "",
          visible: true,
          order: 0
        },
        routes: []
      },
      {
        path: "/admin/createuser",
        url: "/admin/createuser",
        component: components.UserList,
        data: {
          label: "Create User",
          key: "",
          order: 1,
          visible: true,
        },
        routes: []
      },
      {
        path: "/admin/*",
        component: components.NoMatchRoute,
        data: { label: "404",visible: false },
        routes: []
      }
      
    ]
  },
  {
    path: "/mainnomachroute",
    exact: true,
    component: components.LayoutOneColumn,
    data: { label: "404" },
    routes: [
      {
        path: "/mainnomachroute",
        exact: true,
        component: components.MainNoMatchRoute,
        data: { label: "404" },
        routes: []
      }
    ]
  },
  {
    path: "*",
    component: components.NoMatchRoute,
    data: { label: "404" },
    routes: []
  }
];

export default routesStatic;
