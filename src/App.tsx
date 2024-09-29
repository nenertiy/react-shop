import { FC } from "react";
import styles from "./App.module.scss";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <div className={styles.container}>
          <RouterProvider router={router} />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;

