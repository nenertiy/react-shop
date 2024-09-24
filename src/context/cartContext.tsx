import { createContext, FC, ReactNode, useEffect, useState } from "react";

// type CartContextType = {
//   cart: [{ id: number; quantity: number; price: number }];
//   cartItems: [
//     {
//       id: number;
//       quantity: number;
//       price: number;
//     }
//   ];
//   getCartTotal: () => void;
// };

export const CartContext = createContext([]);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  // interface CartItemsState {
  //   id: number;
  //   quantity: number;
  //   price: number;
  //   title: string;
  //   brand: string;
  //   thumbnail: string;
  //   handleMinus: () => void;
  //   handlePlus: () => void;
  // }

  // const [cartItems, setCartItems] = useState<CartItemsState[]>([]);

  // const localStorag = localStorage.getItem("cartItems");
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
  );

  type Item = {
    id: number;
    quantity: number;
    price: number;
    title: string;
    brand: string;
    thumbnail: string;
    handleMinus: () => void;
    handlePlus: () => void;
  };

  const addToCart = (item: Item) => {
    const isItemInCart = cartItems.find((cartItem: { id: number }) => cartItem.id === item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem: { id: number; quantity: number }) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: Item) => {
    const isItemInCart = cartItems.find((cartItem: { id: number }) => cartItem.id === item.id);
    if (isItemInCart?.quantity === 1) {
      setCartItems(cartItems.filter((cartItem: { id: number }) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem: { id: number; quantity: number }) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total: number, item: { price: number; quantity: number }) =>
        total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};
