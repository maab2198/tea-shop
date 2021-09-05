import { Fragment, useContext, useState } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Portals/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import CartContext from "./../store/cart-context";

const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmite] = useState(false);
  const showActions = !showCheckout;
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const isOrderValid = cartCtx.items.length > 0 ? true : false;

  const cartAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderClickHandler = () => {
    setShowCheckout(true);
  };

  const cartRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const formSubmitHander = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(
      "https://tea-order-app-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmite(true);
    cartCtx.clearCart();
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

  const actionsModal = (
    <div className={styles.actions}>
      {isOrderValid && (
        <button className={styles["button--order"]} onClick={orderClickHandler}>
          Order
        </button>
      )}
      <button className={styles["button--close"]} onClick={props.onClose}>
        Close
      </button>
    </div>
  );
  const cartModalContent = (
    <Fragment>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && (
        <Checkout onSubmit={formSubmitHander} onCancel={props.onClose} />
      )}
      {showActions && actionsModal}
    </Fragment>
  );
  const isSubmittingModalContent = <p>Sending data ...</p>;
  const didSubmiteModalContent = (
    <Fragment>
      <p>Successfuly send the order data !</p>
      <div className={styles.actions}>
        <button className={styles["button--close"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );
  return (
    <Modal onClick={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && !didSubmit && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmiteModalContent}
    </Modal>
  );
};

export default Cart;
