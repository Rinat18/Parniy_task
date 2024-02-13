import React from "react";
import "./Product.css";
import { Button } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";

const ProductCard = ({ elem, openModal }) => {
  const { deleteProduct } = useProduct();
  const handleEditClick = () => {
    openModal(elem);
  };
  return (
    <div className="cardProduct">
      <img src={elem.image} alt="" />
      <p>{elem.price}$</p>
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
      <Button>ADD TO CART</Button>
    </div>
  );
};

export default ProductCard;
