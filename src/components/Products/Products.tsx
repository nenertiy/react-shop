import React, { FC, useEffect, useState } from "react";
import axios from "axios";

import Input from "../Input/Input";
import ProductCard from "../ProductCard/ProductCard";

import { API_URL } from "../../utils/constants";
import arrowBack from "../../assets/img/ArrowBack.svg";
import arrowNext from "../../assets/img/ArrowNext.svg";

import styles from "./Products.module.scss";
import SkeletonProducts from "./SkeletonProducts";

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
  const [pagination, setPagination] = useState<number>(0);
  const [isLoading, setLoading] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchProducts(value);
  };

  const previousPage = () => {
    if (pagination > 0) {
      setPagination((prev) => prev - 30);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
    if (pagination <= 150) {
      setPagination((prev) => prev + 30);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/search?q=${searchProducts}`, {
        params: {
          limit: 30,
          skip: pagination,
        },
      });
      setProducts(data.products);
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [pagination, searchProducts]);

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <Input
          value={searchProducts}
          handleChange={handleChange}
        />
      </div>

      <div className={styles.cards}>
        {isLoading ? (
          <SkeletonProducts arr={30} />
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              img={product.images[0]}
              category={product.category}
              title={product.title}
              price={product.price}
            />
          ))
        )}
      </div>
      <div className={styles.pagination}>
        <button
          className={styles.button}
          onClick={previousPage}>
          <img
            src={arrowBack}
            alt=""
          />
        </button>
        <button
          className={styles.button}
          onClick={nextPage}>
          <img
            src={arrowNext}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Products;
