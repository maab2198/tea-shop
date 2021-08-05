import { Fragment, useState } from "react";
import Header from "./Layout/Header/Header.js";
import Products from "./Products/Products.js";
import Cart from "./Cart/Cart.js";

import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const showCartHandler = () => {
    setCartIsOpen(true);
  };
  const hideCartHandler = () => {
    setCartIsOpen(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        <Products />
      </main>
      {cartIsOpen && <Cart onClose={hideCartHandler} />}
    </CartProvider>
  );
};

export default App;
