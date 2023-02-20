import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import NextPage from "../Pages/NextPage";
import ReactPage from "../Pages/ReactPage";
const PostPage = lazy(() => import("../components/Posts/PostPage"));

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
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <PostPage />
          </Suspense>
        ),
      },
    ],
  },
];

export const routes = createBrowserRouter(routeConfig);
