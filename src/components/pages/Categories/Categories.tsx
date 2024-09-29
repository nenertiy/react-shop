import React, { FC, useState } from "react";

import styles from "./Categories.module.scss";
import Input from "../../ui/Input/Input";
import axios from "axios";
import { API_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import SkeletonCategories from "./SkeletonCategories";
import { useQuery } from "@tanstack/react-query";

const Categories: FC = () => {
  interface CategoriesState {
    slug: string;
    name: string;
  }
  const [searchCategories, setSearchCategories] = useState<string>("");

  const fetchCategories = async (): Promise<CategoriesState[]> =>
    axios.get(`${API_URL}/categories`).then((res) => res.data);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });

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
          isSuccess &&
          data
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
