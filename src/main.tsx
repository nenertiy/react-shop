import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/cartContext";
import App from "./App";

import "./reset.scss";
import { FavoriteProvider } from "./context/favoriteContext";

createRoot(document.getElementById("root")!).render(
  <FavoriteProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FavoriteProvider>
);

