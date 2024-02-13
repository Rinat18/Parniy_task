import React, { useEffect } from "react";
import { UseCart } from "../../context/CartContextProvider";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./Cart.css";

const Cart = () => {
  const { getFromCart, cart, getCount } = UseCart();
  console.log(cart.products);
  useEffect(() => {
    getFromCart();
  }, []);
  const cartCliner = () => {
    localStorage.removeItem("cart");
    getFromCart();
  };
  return (
    <div className="cart">
      <div className="container">
        <div className="cart_block">
          <h2>Корзина</h2>
          {cart.products && (
            <>
              {cart.products.map((elem) => (
                <div className="cart_card">
                  <div className="cart_card_img">
                    <img src={elem.item.image} alt="" />
                  </div>
                  <div className="cart_card_desc">
                    <div className="cart_card_desc1">{elem.item.title}</div>
                    <div className="cart_card_desc2">
                      {elem.item.description}
                    </div>
                    <div className="cart_card_desc3">{elem.item.category}</div>
                  </div>
                  <input
                    onChange={(e) => getCount(elem.item.id, e.target.value)}
                    type="number"
                    className="cart_card_counter"
                    value={elem.count}
                  />
                  <div className="cart_card_totalPrice">{elem.subPrice}</div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="totalPrice_block">
          <div className="totalPrice_block_title">Выбрать адрес доставки</div>
          <div className="count_totalPrice">
            <div>Товары, 3 шт.</div>
            <div>3 577 ₽</div>
          </div>
          <div className="count_totalPrice2">
            <div>Итого</div>
            <div>{cart.totalPrice} ₽</div>
          </div>
          <button type="submit" class="button_buy_cart">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
