import React, { FC, useState } from "react";
import axios from "axios";

import Input from "../../ui/Input/Input";
import ProductCard from "../../ui/ProductCard/ProductCard";

import { API_URL } from "../../../utils/constants";
import arrowBack from "../../../assets/img/ArrowBack.svg";
import arrowNext from "../../../assets/img/ArrowNext.svg";

import styles from "./Products.module.scss";
import SkeletonProducts from "./SkeletonProducts";
import { useQuery } from "@tanstack/react-query";

const Products: FC = () => {
  interface ProductsState {
    images: string;
    category: string;
    price: number;
    title: string;
    id: number;
    product: string;
  }

  const [searchProducts, setSearchProducts] = useState<string>("");
  const [pagination, setPagination] = useState<number>(0);

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

  const fetchProducts = async (page: number, search: string): Promise<ProductsState[]> =>
    axios
      .get(`${API_URL}/search?q=${search}`, {
        params: {
          limit: 30,
          skip: page,
        },
      })
      .then((res) => res.data)
      .then((data) => data.products);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["dataProducts", pagination, searchProducts],
    queryFn: () => fetchProducts(pagination, searchProducts),
  });

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
          isSuccess &&
          data.map((product) => (
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
