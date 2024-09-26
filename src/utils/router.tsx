import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Categories from "../components/Categories/Categories";
import Category from "../components/Category/Category";
import Product from "../components/Product/Product";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import Favorite from "../components/Favorite/Favorite";

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:id",
        element: <Category />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
