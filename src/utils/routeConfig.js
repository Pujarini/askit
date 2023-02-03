import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import NextPage from "../Pages/NextPage";
import PostPage from "../Pages/PostPage";
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
  {
    path: "/react/:id",
    element: <PostPage />,
  },
];

export const routes = createBrowserRouter(routeConfig);
