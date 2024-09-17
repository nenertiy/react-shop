import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Categories from "../components/Categories/Categories";
import Category from "../components/Category/Category";

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
        path: "/collections/:id",
        element: <h1>Collections:id</h1>,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:slug",
        element: <Category />,
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
