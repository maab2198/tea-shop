import Input from "../../UI/Controls/Input";
import styles from "./ItemForm.module.css";

const ItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defauitValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default ItemForm;
