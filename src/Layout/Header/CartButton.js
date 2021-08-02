import style from "./CartButton.module.css";
import CartIcon from "../../Cart/CartIcon";

const CartButton = () => {
  return (
    <div className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={style.badge}>3</span>
    </div>
  );
};

export default CartButton;
