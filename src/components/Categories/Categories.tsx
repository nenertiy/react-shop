import React, { FC, useEffect, useState } from "react";

import styles from "./Categories.module.scss";
import Input from "../Input/Input";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Categories: FC = () => {
  interface CategoriesState {
    slug: string;
    name: string;
  }
  const [searchCategories, setSearchCategories] = useState<string>("");
  const [categories, setCategories] = useState<CategoriesState[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/categories`)
      .then((json) => setCategories(json.data))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchCategories(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <Input
          value={searchCategories}
          handleChange={handleChange}
        />
      </div>
      <ul className={styles.list}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          categories
            .filter((category) =>
              category.name.toLowerCase().includes(searchCategories.toLowerCase())
            )
            .map((category) => (
              <Link
                to={`/categories/${category.slug}`}
                key={category.slug}
                className={styles.list_item}>
                {category.name}
              </Link>
            ))
        )}
      </ul>
    </div>
  );
};

export default Categories;
