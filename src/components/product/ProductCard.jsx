import React from "react";
import "./Product.css";
import { Button } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";
import { UseCart } from "../../context/CartContextProvider";

const ProductCard = ({ elem, openModal }) => {
  const { deleteProduct } = useProduct();
  const { addToCart } = UseCart();
  const handleEditClick = () => {
    console.log(elem);
    // openModal(elem);
  };
  return (
    <div className="cardProduct">
      <div className="card_img">
        <img src={elem.image} alt="" />
      </div>
      <p className="card_price">{elem.price} ₽</p>
      <p className="card_price-text">с WB кошёлком</p>
      <p>{elem.category}</p>
      <p>
        {elem.title} / {elem.description}
      </p>
      <p>{elem.rank}</p>
      <Button variant="contained" onClick={() => deleteProduct(elem.id)}>
        DELETE
      </Button>
      <Button variant="contained" onClick={handleEditClick}>
        EDIT
      </Button>
      <Button onClick={() => addToCart(elem)}>ADD TO CART</Button>
    </div>
  );
};

export default ProductCard;
