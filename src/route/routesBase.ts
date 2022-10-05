import Overview from "../pages/Overview";
import Markdown from "../pages/Markdown";
import Swagger from "../pages/Swagger";

export const routesBase = [
  {
    path: "/overview",
    component: Overview,
    data: {
      label: "Overview",
      key: "overview",
      description: null,
      icon: null,
      order: 0
    },
    routes: []
  },
  {
    path: "/markdown",
    component: Markdown,
    data: {
      label: "Markdown",
      key: "markdown",
      description: null,
      icon: null,
      order: 1
    },
    routes: []
  },
  {
    path: "/api-reference",
    component: Swagger,
    data: {
      key: "api-reference",
      label: "API Reference",
      description: null,
      icon: null,
      order: 2
    },
    routes: []
  }
];

export default routesBase;
