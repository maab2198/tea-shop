import { Fragment, useState } from "react";
import Header from "./Layout/Header/Header.js";
import Products from "./Products/Products.js";
import Cart from "./Cart/Cart.js";

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const showCartHandler = () => {
    setCartIsOpen(true);
  };
  const hideCartHandler = () => {
    setCartIsOpen(false);
  };
  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      <main>
        <Products />
      </main>
      {cartIsOpen && <Cart onClose={hideCartHandler} />}
    </Fragment>
  );
};

export default App;
