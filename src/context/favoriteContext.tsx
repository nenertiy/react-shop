import { createContext, FC, ReactNode, useEffect, useState } from "react";

export const FavoriteContext = createContext([]);

interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoriteProvider: FC<FavoriteProviderProps> = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState(
    localStorage.getItem("favoriteItems") ? JSON.parse(localStorage.getItem("favoriteItems")) : []
  );

  type Item = {
    id: number;
    price: number;
    title: string;
    brand: string;
    thumbnail: string;
  };

  const isFavorite = (item: Item) => {
    return favoriteItems.find((favoriteItem: { id: number }) => favoriteItem.id === item.id);
  };

  const addFavorite = (item: Item) => {
    const isFavorite = favoriteItems.find(
      (favoriteItem: { id: number }) => favoriteItem.id === item.id
    );
    if (!isFavorite) {
      setFavoriteItems([...favoriteItems, item]);
    }
  };

  const removeFavorite = (item: Item) => {
    const isFavorite = favoriteItems.find(
      (favoriteItem: { id: number }) => favoriteItem.id === item.id
    );
    if (isFavorite) {
      setFavoriteItems(
        favoriteItems.filter((favoriteItem: { id: number }) => favoriteItem.id !== item.id)
      );
    }
  };

  const clearFavorite = () => {
    setFavoriteItems([]);
  };

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  useEffect(() => {
    const favoriteItems = localStorage.getItem("favoriteItems");
    if (favoriteItems) {
      setFavoriteItems(JSON.parse(favoriteItems));
    }
  }, []);

  return (
    <FavoriteContext.Provider
      value={{ isFavorite, favoriteItems, addFavorite, removeFavorite, clearFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
