import { Fragment, useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Portals/Modal";

import CartContext from "./../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item, id) => (
    <li key={id}>
      <h3>{item.name}</h3>
      <b>{item.price + " "}</b>
      <span>{item.amount}</span>
    </li>
  ));

  return (
    <Modal onClick={props.onClose}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.totals}>
        <span>Total Amount</span>
        <span>{cartCtx.amount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--order"]}>Order</button>
        <button className={styles["button--close"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
