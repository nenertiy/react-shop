import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/collections",
        element: <h1>Collections</h1>,
      },
      {
        path: "/categories",
        element: <h1>Categories</h1>,
      },
      {
        path: "/favorite",
        element: <h1>Favorite</h1>,
      },
      {
        path: "/cart",
        element: <h1>Cart</h1>,
      },
    ],
  },
]);

export default router;
