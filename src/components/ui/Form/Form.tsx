import { FC, FormEvent } from "react";

import arrowNext from "../../../assets/img/ArrowNext.svg";

import styles from "./Form.module.scss";

interface FormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: FC<FormProps> = ({ handleSubmit }) => {
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.info}>
          <div className={styles.title}>Contact info</div>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
          />
          <input
            className={styles.input}
            type="phone"
            id="phone"
            name="phone"
            placeholder="Phone"
            autoComplete="off"
          />
        </div>
        <div className={styles.shipping}>
          <div className={styles.title}>Shipping address</div>
          <div className={styles.name}>
            <input
              className={styles.input_short}
              type="first_name"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              autoComplete="off"
            />
            <input
              className={styles.input_short}
              type="last_name"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              autoComplete="off"
            />
          </div>
          <input
            className={styles.input}
            type="country"
            id="country"
            name="country"
            placeholder="Country"
            autoComplete="off"
          />
          <input
            className={styles.input}
            type="address"
            id="address"
            name="address"
            placeholder="Address"
            autoComplete="off"
          />
          <div className={styles.city}>
            <input
              className={styles.input_short}
              type="text"
              id="city"
              name="city"
              placeholder="City"
              autoComplete="off"
            />
            <input
              className={styles.input_short}
              type="text"
              id="postcode"
              name="postcode"
              placeholder="Postcode"
              autoComplete="off"
            />
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.button_shipping}>
            Shipping
            <img
              src={arrowNext}
              alt=""
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
