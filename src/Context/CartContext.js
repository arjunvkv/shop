import React, { createContext, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cartCount, setcartCount] = useState([]);
  return (
    <CartContext.Provider value={[cartCount, setcartCount]}>
      {children}
    </CartContext.Provider>
  );
};
