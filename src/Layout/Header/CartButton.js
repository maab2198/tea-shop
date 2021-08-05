import { Fragment, useContext } from "react";
import style from "./CartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemsNumber = cartCtx.items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );
  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={style.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default CartButton;
