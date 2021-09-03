import { Fragment } from "react";
import Input from "../UI/Controls/Input";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Your name"
        input={{
          id: "name",
          type: "text",
        }}
      />
      <Input
        label="Email"
        input={{
          id: "email",
          type: "email",
        }}
      />
      <Input
        label="City"
        input={{
          id: "city",
          type: "text",
        }}
      />
      <Input
        label="Street"
        input={{
          id: "street",
          type: "text",
        }}
      />
      <Input
        label="Postal Code"
        input={{
          id: "postal_code",
          type: "text",
        }}
      />
      <button className={styles.button}>Confirm</button>
    </form>
  );
};

export default Checkout;
