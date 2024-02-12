import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";

const cartContext = createContext();
export const UseCart = () => useContext(cartContext);
const INIT_STATE = {
  cart: [],
  cartLength: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer , INIT_STATE);

  const values = {

  }
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
