import { createRoot } from "react-dom/client";
import App from "./App";

import "./reset.scss";
import { FavoriteProvider } from "./context/favoriteContext";

createRoot(document.getElementById("root")!).render(
  <FavoriteProvider>
    <App />
  </FavoriteProvider>
);

