import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

//Context Creation
//This line creates a new context called ShopContext using the createContext function.
//The initial value of the context is set to null, but it will be overridden when the context provider is used
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

//Context Provider Component
//This component will serve as the provider for the ShopContext
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    // This is where the actual content of the application will be rendered. The value prop is set to contextValue,
    //meaning that all the components within the provider will have access to the all_products data via the ShopContext.
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
