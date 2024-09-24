import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/cartContext";
import App from "./App";

import "./reset.scss";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <App />
  </CartProvider>
);

