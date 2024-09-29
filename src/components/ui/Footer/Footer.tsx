import { FC } from "react";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_description}>
        <div>&copy;2024 - copyright</div>
        <div>privacy</div>
      </div>
    </div>
  );
};

export default Footer;
