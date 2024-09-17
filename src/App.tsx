import { FC, useEffect, useState } from "react";
import styles from "./App.module.scss";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router";
import axios from "axios";

const App: FC = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  // axios
  //   .get("http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1/products")
  //   .then((data) => console.log(data));
  //   fetch("https://api.fakestorejson.com/api/v1/public/products?per_page=100&page=1")
  //     .then((data) => data.json())
  //     .then((json) => console.log(json));
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

