import { FC } from "react";

import styles from "./SkeletonProduct.module.scss";
import AddButton from "../AddButton/AddButton";

const SkeletonProduct: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.container_img}></div>
      <div className={styles.container_description}>
        <div className={styles.content}>
          <div className={styles.title}></div>
          <div className={styles.price}></div>
          <div className={styles.brand}></div>
          <div className={styles.description}></div>
          <div className={styles.button}>
            <AddButton onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
