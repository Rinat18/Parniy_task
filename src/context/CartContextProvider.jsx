import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";
import { calcSubPrice, calcTotalPrice, getlocalStorage } from "../helpers/function";

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
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! GET FROM CART

  const getFromCart = () => {
    let cart = getlocalStorage();
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
      };
    }
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  // ! ADD TO CART

  const addToCart = (product) => {
    let cart = getlocalStorage();
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }
    cart.totalPrice = calcTotalPrice(cart.products)
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const getCount = (id, count) => {
    let cart = getlocalStorage();
    cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
        cart.totalPrice = calcTotalPrice(cart.products);
      }
      return elem;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };
  const values = {
    getFromCart,
    cart: state.cart,
    addToCart,
    getCount,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
