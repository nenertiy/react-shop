import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Categories from "../components/pages/Categories/Categories";
import Category from "../components/pages/Category/Category";
import Cart from "../components/pages/Cart/Cart";
import Home from "../components/pages/Home/Home";
import Products from "../components/pages/Products/Products";
import Product from "../components/pages/Product/Product";
import Favorite from "../components/pages/Favorite/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
