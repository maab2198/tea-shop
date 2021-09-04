import { useState, useRef } from "react";

const useInput = (validationCheck) => {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validationCheck(value);
  const hasError = !valueIsValid && isTouched;
  const blurHandler = () => {
    setIsTouched(true);
  };
  const valueChangeHandler = (event) => {
    setValue(inputRef.current.value);
  };
  const resetValue = () => {
    setValue("");
    inputRef.current.value = "";
    setIsTouched(false);
  };

  return {
    value,
    inputRef,
    valueIsValid,
    hasError,
    blurHandler,
    valueChangeHandler,
    resetValue,
  };
};

export default useInput;
