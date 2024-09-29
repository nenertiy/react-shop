import React, { FC, useContext, useState } from "react";

import styles from "./Favorite.module.scss";
import Input from "../../ui/Input/Input";
import { FavoriteContext } from "../../../context/favoriteContext";
import ProductCard from "../../ui/ProductCard/ProductCard";

const Favorite: FC = () => {
  const [searchValue, setSeacrhValue] = useState("");

  const favoriteContext = useContext(FavoriteContext);

  if (!favoriteContext) {
    return <div>Favorite context is not available</div>;
  }
  const { favoriteItems } = favoriteContext;

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
          .map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.thumbnail}
              title={item.title}
              category={item.category}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Favorite;
