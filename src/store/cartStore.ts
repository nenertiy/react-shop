import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  images: string;
  category: string;
  price: number;
  title: string;
  id: number;
  quantity: number;
  brand: string;
}

interface CartState {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
  getTotalCart: () => number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],

      addItemToCart: (item: CartItem) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === item.id);

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            itemExists.quantity++;
          }

          set({ cartItems: [...get().cartItems] });
        } else {
          set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
        }
      },

      removeItemFromCart: (item: CartItem) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === item.id);

        if (itemExists?.quantity === 1) {
          const updatedCartItems = get().cartItems.filter((item) => item.id !== itemExists.id);
          set({ cartItems: updatedCartItems });
        } else {
          if (typeof itemExists?.quantity === "number" && itemExists.quantity > 1) {
            itemExists.quantity--;
          }

          set({ cartItems: [...get().cartItems] });
        }
      },

      getTotalCart: () => {
        return get().cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: "cartItems",
    }
  )
);

export default useCartStore;
