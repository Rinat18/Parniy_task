import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";
export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  categories: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}
const ProductContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const values = {

  }
  return <productContext.Provider value={values}>{children}</productContext.Provider>;
};

export default ProductContextProvider;
