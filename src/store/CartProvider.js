import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  totalAmount: 0,
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemId = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemId];

    let updatedItems;

    // If this product already exist in the cart => existingItem not undefined
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemId] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item); // CONCAT - add item and return NEW arr
    }

    return {
      totalAmount: updatedTotalAmount,
      items: updatedItems,
    };
  } else if (action.type == "REMOVE") {
    const existingItemId = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemId];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemId] = updatedItem;
    }

    return {
      totalAmount: updatedTotalAmount,
      items: updatedItems,
    };
  } else if (action.type == "CLEAR") {
    return defaultCart;
  }
  return defaultCart;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const clearCartHandler = (id) => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    totalAmount: cartState.totalAmount,
    items: cartState.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
