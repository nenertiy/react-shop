import { FC } from "react";

import styles from "./AddButton.module.scss";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: FC<AddButtonProps> = ({ onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}>
      Add
    </button>
  );
};

export default AddButton;
