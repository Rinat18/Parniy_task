import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import FavoritesContext from "./context/FavoritesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <CartContextProvider>
        <FavoritesContext>
          <App />
        </FavoritesContext>
      </CartContextProvider>
    </ProductContextProvider>
  </BrowserRouter>
);
