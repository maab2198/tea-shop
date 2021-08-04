import style from "./CartButton.module.css";
import CartIcon from "../../Cart/CartIcon";

const CartButton = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={style.badge}>3</span>
    </button>
  );
};

export default CartButton;
