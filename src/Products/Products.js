import { Fragment } from "react";
import AvailableList from "./AvailableList";
import Summary from "./Summary";

const Products = () => {
  return (
    <Fragment>
      <Summary />
      <AvailableList />
    </Fragment>
  );
};

export default Products;
