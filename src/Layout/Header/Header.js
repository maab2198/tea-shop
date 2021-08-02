import { Fragment } from "react";
import mealImg from "../../assets/meals.jpeg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={style["main-image"]}>
        <img src={mealImg} alt="Table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
