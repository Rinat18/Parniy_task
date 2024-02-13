import React, { useState } from "react";
import "./Product.css";
import { useProduct } from "../../context/ProductContextProvider";
import { UseCart } from "../../context/CartContextProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import EditModal from "../modal/EditModal";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useFavorites } from "../../context/FavoritesContext";
const ProductCard = ({ elem }) => {
  const { addToFavorites } = useFavorites();
  const { deleteProduct } = useProduct();
  const { addToCart } = UseCart();
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  // ! MODAL EDIT
  const [open, setOpen] = useState(false);
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  const handleEditClick = () => {
    console.log(elem);
    openModal();
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    addToFavorites(elem);
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
      <DeleteOutlineIcon
        variant="contained"
        onClick={() => deleteProduct(elem.id)}
      />
      <EditIcon variant="contained" onClick={handleEditClick} />
      <ShoppingCartIcon onClick={() => addToCart(elem)} />
      <EditModal open={open} elem={elem} closeModal={closeModal} />

      {liked ? (
        <FavoriteIcon onClick={handleLikeClick} />
      ) : (
        <FavoriteBorderIcon onClick={handleLikeClick} />
      )}
    </div>
  );
};

export default ProductCard;
