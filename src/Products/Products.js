import { Fragment } from "react";
import AvailableList from "./AvailableList";
import Summary from "./Summary";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <Fragment>
      <Summary />
      <AvailableList />
    </Fragment>
  );
};

export default Products;
