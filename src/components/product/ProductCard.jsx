import React, { useState } from "react";
import "./Product.css";
import { Button } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";
import { UseCart } from "../../context/CartContextProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProduct();
  const { addToCart } = UseCart();
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const handleEditClick = () => {
    console.log(elem);
    // openModal(elem);
  };
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="cardProduct">
      <div className="card_img">
        <img
          src={elem.image}
          alt=""
          onClick={() => navigate(`/detail/${elem.id}`)}
        />
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
      <div>
        {liked ? (
          <FavoriteIcon onClick={handleLikeClick} />
        ) : (
          <FavoriteBorderIcon onClick={handleLikeClick} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
