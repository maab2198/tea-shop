import React from "react";

const defaultCart = {
  amount: 0,
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
};

const CartContext = React.createContext(defaultCart);

export default CartContext;
