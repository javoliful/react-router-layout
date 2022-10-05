import * as components from "./Imports";

export const routesAuto = [  
  {
    path: "/",
    url: "/",
    component: components.LayoutOneColumn,
    exact: true,
    data: {
      label: "Overview",
      key: "overview",
      description: null,
      icon: null,
      order: 0,
      visible: true,
      role: 'user'
    },
    routes: [
      {
        path: "/",     
        url: "/",
        component: components.Overview,
        data: {
          label: "Overview Component",
          key: "overview",
          description: null,
          icon: null,
          order: 0
        },
        routes: []
      }
    ]
  },
  {
    path: "/markdown",
    url: "/markdown",
    component: components.LayoutTwoColumn,     
    data: {
      label: "Markdown",
      key: "",
      order: 1,
      visible: true,
      role: 'user'
    },
    routes: [
      {
        path: "/markdown",
        url: "/markdown",
        exact: true,
        component: components.Markdown,               
        data: {
          label: "Overview",
          visible: true,
          key: "overview",
          icon: "boxIcon",
          opened: false,
          file: "/overview.md"
        },
        routes: []
      },
      {
        path: "/markdown/get-started/:anchor?",
        url: "/markdown/get-started",
        component: components.Markdown,  
        data: {
          visible: true,         
          label: "Get Started",
          key: "get-started",
          icon: "boxIcon",
          opened: false,          
          description: "General information about how Get started into the Smart Platform."
        },
        routes: [
          {
            url: "/markdown/get-started/before-you-start",                      
            data: {   
              visible: true,           
              label: "Before you start",
              description: "General information about REST APIS.",
              key: "before-you-start"
            }
          },
          {
            url: "/markdown/get-started/example-of-a-call-of-a-get-api",        
            data: {
              visible: true,
              label: "Example of a call of a GET API",
              description: "A simple example independant of ASP.",
              key: "example-of-a-call-of-a-get-api"
            }
          }
        ]
      },
      {
        path: "/markdown/use-cases/:anchor?",
        url: "/markdown/use-cases",
        component: components.Markdown,        
        data: {         
          visible: true,
          label: "How to call a Service",
          key: "use-cases",
          icon: "boxIcon",
          opened: false,
          file: "/how-to-call-a-service.md",
          description:
            "General use cases about how to call a service, and all methods availables."
        },
        routes: [
          {
            url: "/markdown/use-cases/how-to-call-a-service",  
            data: {
              visible: true,
              label: "How to call a service 2",
              description: "Explain the general information about the url.",
              key: "how-to-call-a-service"
            }
          },
          {
            url: "/markdown/use-cases/information-about-the-header",
            data: {
              visible: true,
              label: "Information about the header",
              description: "Explain the header content of a call.",
              key: "information-about-the-header"
            }
          }
        ]
      },
      {
        path: "/markdown/*",
        component: components.NoMatchRoute,
        data: { label: "404",visible: false },
        routes: []
      }
    ]
  },
  {
    path: "/api-reference",
    url: "/api-reference",
    component: components.LayoutTwoColumn,
    data: {
      key: "",
      label: "API Reference",
      type: "api",
      order: 2,
      visible: true,
      role: 'user'
    },
    routes: [
      {
        path: "/api-reference",
        url: "/api-reference",
        exact: true,
        component: components.Swagger,
        data: {
          visible: true,
          file: "/overview-api.md",
          icon: "boxIcon",
          key: "overview",
          label: "Overview",
          opened: false
        },
        routes: []
      },
      {
        path: "/api-reference/estates",
        url: "/api-reference/estates",
        component: components.Swagger,
        data: {
          visible: true,
          label: "How to get the tree of real estate",
          key: "estates",
          file: "/estates.json",
          description:
            "Real estate (in BRM context): How to get the tree of real estate."
        },
        routes: []
      },
      {
        path: "/api-reference/*",
        component: components.NoMatchRoute,
        data: { label: "404", visible: false },
        routes: []
      }
    ]
  }
];

export default routesAuto;
