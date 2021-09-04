import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={`${styles.input} ${props.hasError ? styles.invalid : ""}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        onChange={props.onChange}
        onBlur={props.onBlur}
        {...props.input}
      />

      {props.hasError && <p>Please enter a valid {props.input.text} </p>}
    </div>
  );
});

export default Input;
