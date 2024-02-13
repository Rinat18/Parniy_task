import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContextProvider";

const DetailCards = ({ elem }) => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useProduct();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);

  return (
    <div className="detail">
      <img src={oneProduct.image} alt="" />
      <p>{oneProduct.title}</p>
      <p>{oneProduct.description}</p>
      <p>{oneProduct.category}</p>
      <p>{oneProduct.price}</p>
    </div>
  );
};

export default DetailCards;
