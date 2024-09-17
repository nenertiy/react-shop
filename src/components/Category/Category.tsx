import React, { FC } from "react";

import styles from "./Category.module.scss";
import Input from "../Input/Input";

const Category: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <Input />
      </div>
    </div>
  );
};

export default Category;
