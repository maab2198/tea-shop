import { useContext } from "react";

import ItemForm from "./ItemForm";
import styles from "./Item.module.css";
import CartContext from "../../store/cart-context";

const Item = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (enteredAmount) => {
    cartCtx.addItem({
      amount: enteredAmount,
      id: props.id,
      price: props.price,
      name: props.name,
    });
  };

  return (
    <li className={styles.product}>
      <h3 className={styles.sku}>{props.name}</h3>
      <p className={styles.description}>{props.description}</p>
      <span className={styles.price}>{price}</span>
      <div>
        <ItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Item;
