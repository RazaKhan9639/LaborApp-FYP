import React, { createContext, useState } from "react";
import Data from "../User.json";

export const UserContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const UserContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = Data.find((product) => product.id === Number(item));
        totalAmount += itemInfo.amount * cartItem[item];
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
