import { FC, useState } from "react";

import Input from "../../ui/Input/Input";
import styles from "./Category.module.scss";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../utils/constants";
import axios from "axios";
import BackButton from "../../ui/BackButton/BackButton";
import SkeletonProducts from "../Products/SkeletonProducts";
import ProductCard from "../../ui/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";

const Category: FC = () => {
  interface CardState {
    images: string[];
    category: string;
    title: string;
    price: number;
    id: number;
  }

  const [search, setSearch] = useState<string>("");
  const { id } = useParams();

  const fetchCategory = async (id: string | undefined): Promise<CardState[]> =>
    axios
      .get(`${API_URL}/category/${id}`)
      .then((res) => res.data)
      .then((data) => data.products);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["category", id],
    queryFn: () => fetchCategory(id),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <Input
          value={search}
          handleChange={handleChange}
        />
      </div>
      <BackButton />
      <div className={styles.cards}>
        {isLoading ? (
          <SkeletonProducts arr={Math.floor(Math.random() * 15) + 5} />
        ) : (
          isSuccess &&
          data
            .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
            .map((el) => (
              <ProductCard
                id={el.id}
                img={el.images[0]}
                category={el.category}
                title={el.title}
                price={el.price}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Category;
