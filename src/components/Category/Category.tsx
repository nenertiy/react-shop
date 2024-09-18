import { FC, useEffect, useState } from "react";

import styles from "./Category.module.scss";
import Input from "../Input/Input";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import BackButton from "../BackButton/BackButton";

const Category: FC = () => {
  interface CardState {
    images: string;
    category: string;
    title: string;
    price: number;
    id: number;
  }

  const [card, setCard] = useState<CardState[]>([]);
  const [search, setSearch] = useState<string>("");
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get(`${API_URL}/category/${id}`).then((json) => setCard(json.data.products));
    console.log(card);
  }, []);

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
        {card
          .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
          .map((el) => (
            <ProductCard
              id={el.id}
              img={el.images[0]}
              category={el.category}
              title={el.title}
              price={el.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Category;
