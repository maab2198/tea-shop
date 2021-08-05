import CartContext from "./cart-context";

const CartProvider = (props) => {
  const cart = {
    amount: 22.99,
    items: [
      {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        amount: 2,
      },
    ],
    addItem: (item) => {},
    removeItem: (id) => {},
  };

  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};
  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
