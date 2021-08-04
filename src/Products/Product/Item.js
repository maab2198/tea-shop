import ItemForm from "./ItemForm";
import styles from "./Item.module.css";

const Item = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.product}>
      <h3 className={styles.sku}>{props.name}</h3>
      <p className={styles.description}>{props.description}</p>
      <span className={styles.price}>{price}</span>
      <div>
        <ItemForm id={props.id} />
      </div>
    </li>
  );
};

export default Item;
