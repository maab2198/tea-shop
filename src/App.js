import { Fragment } from "react";
import Header from "./Layout/Header/Header.js";
import Products from "./Products/Products.js";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Products />
    </Fragment>
  );
};

export default App;
