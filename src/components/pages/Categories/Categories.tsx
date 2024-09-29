import React, { FC, useEffect, useState } from "react";

import styles from "./Categories.module.scss";
import Input from "../../ui/Input/Input";
import axios from "axios";
import { API_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import SkeletonCategories from "./SkeletonCategories";

const Categories: FC = () => {
  interface CategoriesState {
    slug: string;
    name: string;
  }
  const [searchCategories, setSearchCategories] = useState<string>("");
  const [categories, setCategories] = useState<CategoriesState[]>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/categories`);
      setCategories(data);
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
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
          <SkeletonCategories arr={24} />
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
