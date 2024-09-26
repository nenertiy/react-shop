import { FC, FormEvent, useContext } from "react";
import BackButton from "../BackButton/BackButton";

import styles from "./Cart.module.scss";
import Form from "../Form/Form";
import { CartContext } from "../../context/cartContext";
import CartCard from "../CartCard/CartCard";

const Cart: FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Cart context is not available</div>;
  }

  const { cartItems, addToCart, removeFromCart, getCartTotal } = cartContext;

  const shippping = Math.floor(Math.random() * 30) + 1;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Shopping");
  };

  return (
    <div className={styles.container}>
      <BackButton />
      <div className={styles.checkout}>Checkout</div>
      <div className={styles.cart}>
        <Form handleSubmit={handleSubmit} />
        <div className={styles.products_cart}>
          <div className={styles.products_cart_container}>
            <div className={styles.order}>your order</div>
            <div className={styles.list}>
              {cartItems.length > 0
                ? cartItems.map((cartItem) => (
                    <CartCard
                      key={cartItem.id}
                      title={cartItem.title}
                      price={cartItem.price}
                      images={cartItem.images[0]}
                      brand={cartItem.brand}
                      quantity={cartItem.quantity}
                      handleMinus={() => removeFromCart(cartItem)}
                      handlePlus={() => addToCart(cartItem)}
                    />
                  ))
                : "Your cart is empty"}
            </div>
            <div className={styles.line}></div>
            <div className={styles.subtotal}>
              <div>Subtotal</div>
              <div>{Math.floor(getCartTotal())}$</div>
            </div>
            <div className={styles.subtotal}>
              <div>Shipping</div>
              <div>{shippping}$</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.total}>
              <div>Total</div>
              <div>{Math.round(shippping + getCartTotal())}$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
