import { FC } from "react";

import styles from "./SkeletonProductCard.module.scss";

const SkeletonProductCard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}></div>
      <div className={styles.category}></div>
      <div className={styles.title}></div>
      <div className={styles.price}></div>
    </div>
  );
};

export default SkeletonProductCard;
