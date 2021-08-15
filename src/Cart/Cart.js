import { Fragment, useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Portals/Modal";
import CartItem from "./CartItem";
import CartContext from "./../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const isOrderValid = cartCtx.items.length > 0 ? true : false;
  const cartAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={cartAddItemHandler.bind(null, item)}
      onRemove={cartRemoveItemHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onClick={props.onClose}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        {isOrderValid && (
          <button className={styles["button--order"]}>Order</button>
        )}
        <button className={styles["button--close"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
