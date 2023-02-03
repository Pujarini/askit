import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import NextPage from "../Pages/NextPage";
import ReactPage from "../Pages/ReactPage";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/react",
        element: <ReactPage />,
      },
      {
        path: "/next",
        element: <NextPage />,
      },
    ],
  },
];

export const routes = createBrowserRouter(routeConfig);
