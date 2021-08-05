import React from "react";

const defaultCart = {
  amount: 0,
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
};

const CartContext = React.createContext(defaultCart);

export default CartContext;
