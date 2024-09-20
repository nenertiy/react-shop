import React, { FC } from "react";

import styles from "./AddButton.module.scss";

const AddButton: FC = () => {
  return <button className={styles.button}>Add</button>;
};

export default AddButton;
