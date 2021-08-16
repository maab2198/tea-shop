import { Fragment } from "react";
import CartButton from "./CartButton";
import mealImg from "../../assets/meals.jpeg";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>
          茶馆
          <span className={style.subtitle}> TeaShop </span>
        </h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={style["main-image"]}>
        <img
          src="https://cdn.orangenews.hk/common//202010/13193321atp4.jpg"
          alt="Tea pot"
        />
      </div>
    </Fragment>
  );
};

export default Header;
