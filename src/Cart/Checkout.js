import { Fragment, useState } from "react";
import Input from "../UI/Controls/Input";
import styles from "./Checkout.module.css";
import useInput from "../hooks/use-input";

const isNotEmpty = (val) => val && val.trim() !== "";
const isEmail = (val) => val && val.includes("@");

const Checkout = (props) => {
  const {
    inputRef: nameInputRef,
    valueIsValid: nameIsValid,
    hasError: nameInputHasError,
    blurHandler: nameBlurHandler,
    valueChangeHandler: nameChangedHandler,
    resetValue: resetNameValue,
  } = useInput(isNotEmpty);

  const {
    inputRef: cityInputRef,
    valueIsValid: cityIsValid,
    hasError: cityInputHasError,
    blurHandler: cityBlurHandler,
    valueChangeHandler: cityChangedHandler,
    resetValue: resetCityValue,
  } = useInput(isNotEmpty);

  const {
    inputRef: streetInputRef,
    valueIsValid: streetIsValid,
    hasError: streetInputHasError,
    blurHandler: streetBlurHandler,
    valueChangeHandler: streetChangedHandler,
    resetValue: resetStreetValue,
  } = useInput(isNotEmpty);

  const {
    inputRef: emailInputRef,
    valueIsValid: emailIsValid,
    hasError: emailInputHasError,
    blurHandler: emailBlurHandler,
    valueChangeHandler: emailChangedHandler,
    resetValue: resetEmailValue,
  } = useInput(isEmail);

  const {
    inputRef: postInputRef,
    valueIsValid: postIsValid,
    hasError: postInputHasError,
    blurHandler: postBlurHandler,
    valueChangeHandler: postChangedHandler,
    resetValue: resetPostValue,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (
    nameIsValid &&
    emailIsValid &&
    cityIsValid &&
    streetIsValid &&
    postIsValid
  ) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      console.log("form not Valid");
    } else {
      console.log("form is valid");
    }

    resetNameValue();
    resetStreetValue();
    resetEmailValue();
    resetCityValue();
    resetPostValue();
  };
  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <Input
        ref={nameInputRef}
        label="Your name"
        input={{
          id: "name",
          text: "name",
          type: "text",
        }}
        hasError={nameInputHasError}
        onChange={nameChangedHandler}
        onBlur={nameBlurHandler}
      />
      <Input
        ref={emailInputRef}
        label="Email"
        input={{
          id: "email",
          text: "email",
          type: "email",
        }}
        hasError={emailInputHasError}
        onChange={emailChangedHandler}
        onBlur={emailBlurHandler}
      />
      <Input
        ref={cityInputRef}
        label="City"
        input={{
          id: "city",
          text: "city",
          type: "text",
        }}
        hasError={cityInputHasError}
        onChange={cityChangedHandler}
        onBlur={cityBlurHandler}
      />
      <Input
        ref={streetInputRef}
        label="Street"
        input={{
          id: "street",
          text: "street",
          type: "text",
        }}
        hasError={streetInputHasError}
        onChange={streetChangedHandler}
        onBlur={streetBlurHandler}
      />
      <Input
        ref={postInputRef}
        label="Postal Code"
        input={{
          id: "postal_code",
          text: "postal code",
          type: "text",
        }}
        hasError={postInputHasError}
        onChange={postChangedHandler}
        onBlur={postBlurHandler}
      />

      <div className={styles.actions}>
        <button
          type="button"
          onClick={props.onCancel}
          className={styles.button}
        >
          Cancel
        </button>
        <button className={styles.button}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
