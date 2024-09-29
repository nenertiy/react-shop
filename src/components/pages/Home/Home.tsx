import { FC } from "react";

import LaptopsSwiper from "../../ui/LaptopsSwiper/LaptopsSwiper";
import PhonesSwiper from "../../ui/PhonesSwiper/PhonesSwiper";

import styles from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Laptops</h1>
      <LaptopsSwiper />
      <h1 className={styles.title}>Phones</h1>
      <PhonesSwiper />
    </div>
  );
};

export default Home;
