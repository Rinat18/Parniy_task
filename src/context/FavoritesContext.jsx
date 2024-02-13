import React, { createContext, useContext, useReducer } from "react";
import { getProductsCountInFavorites } from "../helpers/function";
const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const INIT_STATE = {
  favorites: [],
  favorLength: 0,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (elem) => elem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
const FavoritesContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //   !ADD
  const addToFavorites = (product) => {
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: product,
    });
    console.log(product);
  };
  //   !REMOVE
  const removeFromFavorites = (product) => {
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      payload: product,
    });
  };

  const values = {
    favorites: state.favorites,
    addToFavorites,
    removeFromFavorites,
  };
  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContext;
