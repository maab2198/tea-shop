import { useState } from "react";
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
    <main className="main">
      <CartProvider>
        <Header onShowCart={showCartHandler} />
        <Products />
        {cartIsOpen && <Cart onClose={hideCartHandler} />}
      </CartProvider>
    </main>
  );
};

export default App;
