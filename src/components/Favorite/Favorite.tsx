import React, { FC, useContext, useEffect, useState } from "react";

import styles from "./Favorite.module.scss";
import Input from "../Input/Input";
import { FavoriteContext } from "../../context/favoriteContext";
import ProductCard from "../ProductCard/ProductCard";

const Favorite: FC = () => {
  const { favoriteItems } = useContext(FavoriteContext);

  const [searchValue, setSeacrhValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSeacrhValue(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <Input
          value={searchValue}
          handleChange={handleChange}
        />
      </div>
      <div className={styles.list}>
        {favoriteItems
          .filter((item: { title: string }) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map(
            (item: {
              id: number;
              thumbnail: string;
              title: string;
              category: string;
              price: number;
            }) => (
              <ProductCard
                key={item.id}
                id={item.id}
                img={item.thumbnail}
                title={item.title}
                category={item.category}
                price={item.price}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Favorite;
