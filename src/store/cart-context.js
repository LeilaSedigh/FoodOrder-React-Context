import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearall: () => {},
});

export default CartContext;
