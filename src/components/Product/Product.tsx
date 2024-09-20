import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Product.module.scss";
import BackButton from "../BackButton/BackButton";
import { API_URL } from "../../utils/constants";
import axios from "axios";
import AddButton from "../AddButton/AddButton";

const Product: FC = () => {
  interface ProductState {
    title: string;
    price: number;
    brand: string;
    description: string;
    images: string;
  }
  const { id } = useParams();

  const [product, setProduct] = useState<ProductState>({
    title: "",
    price: 0,
    brand: "",
    description: "",
    images: "",
  });

  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then((json) => setProduct(json.data));
    // .finally(() => setLoading(false));
    // console.log(product);
  }, [id]);

  return (
    <div className={styles.container}>
      <BackButton />
      <div className={styles.card}>
        <div className={styles.container_img}>
          <img
            className={styles.img}
            src={product.images[0]}
            alt=""
          />
        </div>
        <div className={styles.container_description}>
          <div className={styles.content}>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>${product.price}</div>
            <div className={styles.brand}>{product.brand}</div>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.button}>
              <AddButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
