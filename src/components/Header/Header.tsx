import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import routes from "../../utils/routes";

import styles from "./Header.module.scss";

import icon from "../../assets/img/icon.png";
import line_button from "../../assets/img/line_button.svg";
import favorite from "../../assets/img/favorite.svg";
import cart from "../../assets/img/cart.svg";
import profile from "../../assets/img/profile.svg";

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.list}>
          <RouterLink to="/">
            <img
              src={line_button}
              alt="line button"
            />
          </RouterLink>
          {routes.map((el) => (
            <RouterLink
              className={styles.link}
              to={el.path}
              key={el.path}>
              {el.title}
            </RouterLink>
          ))}
        </ul>
      </div>
      <RouterLink to="/">
        <img
          src={icon}
          alt="icon"
        />
      </RouterLink>

      <div className={styles.list}>
        <RouterLink to="/favorite">
          <div className={styles.circle}>
            <img
              src={favorite}
              alt=""
            />
          </div>
        </RouterLink>
        <RouterLink
          to="/cart"
          className={styles.cart}>
          <p className={styles.cart_title}>Cart</p>
          <div className={styles.circle}>
            <img
              src={cart}
              alt=""
            />
          </div>
        </RouterLink>
        <RouterLink to="/profile">
          <div className={styles.circle}>
            <img
              src={profile}
              alt=""
            />
          </div>
        </RouterLink>
      </div>
    </div>
  );
};

export default Header;
