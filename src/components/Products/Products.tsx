import React, { FC, useEffect, useState } from "react";
import Input from "../Input/Input";

import styles from "./Products.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { API_URL } from "../../utils/constants";

const Products: FC = () => {
  interface ProductsState {
    id: number;
    images: string;
    category: string;
    title: string;
    price: number;
  }
  const [searchProducts, setSearchProducts] = useState<string>("");
  const [products, setProducts] = useState<ProductsState[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchProducts(value);
  };

  useEffect(() => {
    // axios.get(`${API_URL}/search?q=${searchProducts}`).then((json) => console.log(json.data));
    axios
      .get(`${API_URL}/search?q=${searchProducts}`)
      .then((json) => setProducts(json.data.products));
  }, [searchProducts]);

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <Input
          value={searchProducts}
          handleChange={handleChange}
        />
      </div>

      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.images[0]}
            category={product.category}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
