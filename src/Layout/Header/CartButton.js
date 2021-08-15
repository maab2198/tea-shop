import { useContext, useState, useEffect } from "react";
import style from "./CartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const btnClasses = `${style.button} ${btnIsHighlighted ? style.bump : ""}`;
  const cartItemsNumber = items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );
  useEffect(() => {
    if (items.length == 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // cleaner function, run auto
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={style.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default CartButton;
