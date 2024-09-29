import { FC } from "react";

import styles from "./SkeletonCategories.module.scss";

interface SkeletonCategoriesProps {
  arr: number;
}

const SkeletonCategories: FC<SkeletonCategoriesProps> = ({ arr }) => {
  const array = [...Array(arr)];

  const randomWidth = Math.floor(Math.random() * 100) + 100;
  console.log(randomWidth);

  return (
    <div className={styles.list}>
      {array.map(() => (
        <div className={styles.list_item}></div>
      ))}
    </div>
  );
};

export default SkeletonCategories;
