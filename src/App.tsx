import { FC } from "react";
import styles from "./App.module.scss";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router";

const App: FC = () => {
  // const fetchAPI = async () => {
  // const res = await fetch("https://dummyjson.com/products?limit=190");
  //   const res = await fetch("https://dummyjson.com/products/categories");
  //   const json = await res.json();
  //   setProducts(json);
  // };
  // useEffect(() => {
  //   fetchAPI();
  //   console.log(products);
  // }, []);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;

