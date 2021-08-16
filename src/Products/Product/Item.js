import { useState, useContext } from "react";

import ItemForm from "./ItemForm";
import styles from "./Item.module.css";
import CartContext from "../../store/cart-context";

const Item = (props) => {
  const [imgOnHover, setImgOnHover] = useState(false);
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (enteredAmount) => {
    cartCtx.addItem({
      amount: enteredAmount,
      id: props.id,
      price: props.price,
      name: props.eng_name,
    });
  };

  return (
    <li className={styles.product}>
      <div
        onMouseOut={() => setImgOnHover(false)}
        onMouseOver={() => setImgOnHover(true)}
      >
        <h2
          className={styles.ch_title + ` ${imgOnHover ? styles.hovered : ""}`}
        >
          {props.location} <span className={styles.ch_name}>{props.name}</span>
        </h2>

        <div
          className={styles.test}
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
      </div>

      <h3 className={styles.sku}>{props.eng_name}</h3>
      <p className={styles.description}>{props.description}</p>
      <span className={styles.price}>{price}</span>

      <div>
        <ItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Item;
