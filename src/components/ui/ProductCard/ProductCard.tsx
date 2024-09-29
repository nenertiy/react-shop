import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  img: string;
  category: string;
  title: string;
  price: number;
  id: number;
}

const ProductCard: FC<ProductCardProps> = ({ id, img, category, title, price }) => {
  return (
    <Link
      to={`/product/${id}`}
      className={styles.container}>
      <div className={styles.img_container}>
        <img
          className={styles.img}
          src={img}
          alt=""
        />
      </div>
      <div className={styles.category}>{category}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>$ {price}</div>
    </Link>
  );
};

export default ProductCard;
