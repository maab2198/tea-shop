import { useRef, useState } from "react";

import Input from "../../UI/Controls/Input";
import styles from "./ItemForm.module.css";

const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef(null);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountRef.current.value;

    if (enteredAmount === 0 || enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount greater then 1</p>}
    </form>
  );
};

export default ItemForm;
