import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home.jsx";
import ErrorElement from "../ErrorElement/ErrorElement";
import Topics from "../Topics/Topics";
import Statistics from "../Statistics/Statistics";
import Blog from "../Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: async () =>
      await fetch("https://openapi.programming-hero.com/api/quiz"),
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/topics/:id",
        loader: async ({ params }) =>
          fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Topics />,
      },
      {
        path: "/topics/:name/:topicId",
        loader: async ({ params }) =>
          fetch(
            ` https://openapi.programming-hero.com/api/quiz/${params.topicId}`
          ),
        element: <Topics />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
