import { createContext, FC, ReactNode, useEffect, useState, useMemo } from "react";

interface Item {
  category: string;
  id: number;
  price: number;
  title: string;
  brand: string;
  thumbnail: string;
}

interface FavoriteContextProps {
  favoriteItems: Item[];
  isFavorite: (item: Item) => boolean;
  addFavorite: (item: Item) => void;
  removeFavorite: (item: Item) => void;
  clearFavorite: () => void;
}

export const FavoriteContext = createContext<FavoriteContextProps | undefined>(undefined);

interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoriteProvider: FC<FavoriteProviderProps> = ({ children }) => {
  const loadFavoritesFromStorage = () => {
    const storedFavorites = localStorage.getItem("favoriteItems");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };

  const [favoriteItems, setFavoriteItems] = useState<Item[]>(loadFavoritesFromStorage);

  const isFavorite = useMemo(
    () => (item: Item) => !!favoriteItems.find((favoriteItem) => favoriteItem.id === item.id),
    [favoriteItems]
  );

  const addFavorite = (item: Item) => {
    if (!isFavorite(item)) {
      setFavoriteItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeFavorite = (item: Item) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((favoriteItem) => favoriteItem.id !== item.id)
    );
  };

  const clearFavorite = () => {
    setFavoriteItems([]);
  };

  // Save favorite items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  return (
    <FavoriteContext.Provider
      value={{ favoriteItems, isFavorite, addFavorite, removeFavorite, clearFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
