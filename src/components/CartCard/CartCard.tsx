import { FC } from "react";

import styles from "./CartCard.module.scss";

import Minus from "../../assets/img/Minus.svg";
import Plus from "../../assets/img/Plus.svg";

interface CartCardProps {
  images: string;
  title: string;
  price: number;
  brand: string;
  quantity: number;
  handleMinus: () => void;
  handlePlus: () => void;
}

const CartCard: FC<CartCardProps> = ({
  images,
  title,
  price,
  brand,
  quantity,
  handleMinus,
  handlePlus,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img
          className={styles.img}
          src={images}
          alt=""
        />
      </div>
      <div className={styles.description}>
        <div>{title}</div>
        <div className={styles.brand}>{brand}</div>
        <div className={styles.count}>
          <button
            className={styles.button}
            onClick={handleMinus}>
            <img
              src={Minus}
              alt=""
            />
          </button>
          <div className={styles.count_product}>{quantity}</div>
          <button
            className={styles.button}
            onClick={handlePlus}>
            <img
              src={Plus}
              alt=""
            />
          </button>
        </div>
        <div className={styles.price}>{price}$</div>
      </div>
    </div>
  );
};

export default CartCard;
