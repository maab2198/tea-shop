import { Fragment } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Portals/Modal";

const Cart = (props) => {
  const cartItems = [1, 2, 3].map((item) => <li>item</li>);

  return (
    <Modal onClick={props.onClose}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.totals}>
        <span>Total Amount</span>
        <span>35.55</span>
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
