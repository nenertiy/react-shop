import { FC } from "react";

import styles from "./Products.module.scss";
import SkeletonProductCard from "../ProductCard/SkeletonProductCard";

interface SkeletonProductsProps {
  arr: number;
}

const SkeletonProducts: FC<SkeletonProductsProps> = ({ arr }) => {
  const array = [...Array(arr)];

  return (
    <div className={styles.cards}>
      {array.map((_, index) => (
        <SkeletonProductCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonProducts;
