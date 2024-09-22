import { FC } from "react";
import styles from "./App.module.scss";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;

