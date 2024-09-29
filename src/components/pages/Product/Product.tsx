import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./Product.module.scss";
import BackButton from "../../ui/BackButton/BackButton";
import { API_URL } from "../../../utils/constants";
import axios from "axios";
import AddButton from "../../ui/AddButton/AddButton";
import SkeletonProduct from "./SkeletonProduct";
import { FavoriteContext } from "../../../context/favoriteContext";
import FavoriteButton from "../../ui/FavoriteButton/FavoriteButton";
import useCartStore from "../../../store/cartStore";
import { useQuery } from "@tanstack/react-query";

interface ProductState {
  title: string;
  price: number;
  brand: string;
  description: string;
  images: string;
  id: number;
  thumbnail: string;
  quantity: number;
  category: string;
}

const Product: FC = () => {
  const { id } = useParams();

  const fetchProduct = async (id: string | undefined): Promise<ProductState> =>
    axios.get(`${API_URL}/${id}`).then((res) => res.data);

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });

  // zustand for cart
  const addItemToCart = useCartStore((state) => state.addItemToCart);

  // Favorite context
  const favoriteContext = useContext(FavoriteContext);
  if (!favoriteContext) {
    return <div>Favorite context is not available</div>;
  }
  const { addFavorite, isFavorite, removeFavorite } = favoriteContext;

  if (isError) return <div>Failed to load product</div>;

  return (
    <div className={styles.container}>
      <BackButton />
      {isLoading ? (
        <SkeletonProduct />
      ) : (
        isSuccess &&
        data && (
          <div className={styles.card}>
            <div className={styles.container_img}>
              <img
                className={styles.img}
                src={data?.images?.[0] ?? ""}
                alt={data.title}
              />
            </div>
            <div className={styles.container_description}>
              <div className={styles.favorite}>
                <FavoriteButton
                  isFavorite={isFavorite(data)}
                  handleFavorite={
                    isFavorite(data) ? () => removeFavorite(data) : () => addFavorite(data)
                  }
                />
              </div>
              <div className={styles.content}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.price}>${data.price}</div>
                <div className={styles.brand}>{data.brand}</div>
                <div className={styles.description}>{data.description}</div>
                <div className={styles.button}>
                  <AddButton onClick={() => addItemToCart(data)} />
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Product;
