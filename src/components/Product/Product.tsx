import { FC } from "react";
import { useParams } from "react-router-dom";

import styles from "./Product.module.scss";
import BackButton from "../BackButton/BackButton";

const Product: FC = () => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <BackButton />
      <div>Product {id}</div>
    </div>
  );
};

export default Product;
