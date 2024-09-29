import React, { FC } from "react";

import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ value, handleChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
