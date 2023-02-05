import { createBrowserRouter } from "react-router-dom";
import PostPage from "../components/Posts/PostPage";
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
      {
        path: "/react/post/:id",
        element: <PostPage />,
      },
    ],
  },
];

export const routes = createBrowserRouter(routeConfig);
