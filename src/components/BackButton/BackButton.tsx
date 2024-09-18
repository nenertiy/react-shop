import { FC } from "react";
import { useNavigate } from "react-router-dom";

import arrowBack from "../../assets/img/ArrowBack.svg";

import styles from "./BackButton.module.scss";

const BackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className={styles.button}
        onClick={() => navigate(-1)}>
        <img
          src={arrowBack}
          alt=""
        />
      </button>
    </div>
  );
};

export default BackButton;
