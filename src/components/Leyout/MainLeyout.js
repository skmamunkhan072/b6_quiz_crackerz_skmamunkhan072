import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../Home/Home";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
    ],
  },
]);
