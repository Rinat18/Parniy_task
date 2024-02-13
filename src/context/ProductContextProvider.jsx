import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API_CARDS } from "../helpers/consts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  // !CREATE
  const addProduct = async (obj) => {
    await axios.post(API_CARDS, obj);
    navigate("/");
  };
  // !GET
  const getProduct = async () => {
    const { data } = await axios(`${API_CARDS}${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };
  // !DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API_CARDS}/${id}`);
    getProduct();
  };
  // !GET_ONE_PRODUCT
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API_CARDS}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    });
  };
  // !EDIT
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API_CARDS}/${id}`, editedProduct);
    navigate("/");
  };
  // ! SEARCH 
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if(value === ""){
      search.delete(query)
    }else{
      search.set(query, value)
    }
    const url = `${window.location.pathname}?${search.toString()}`
    navigate(url)
  }
  const values = {
    addProduct,
    getProduct,
    products: state.products,
    deleteProduct,
    getOneProduct,
    editProduct,
    oneProduct: state.oneProduct,
    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
