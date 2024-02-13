import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UseCart } from "../context/CartContextProvider";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = UseCart();
  const handleRemoveAndAddToCart = (product) => {
    removeFromFavorites(product);
    addToCart(product);
  };

  return (
    <div>
      <h2>Избранные товары</h2>
      <div className="favorites-container">
        {favorites.map((favorite) => (
          <div className="favorite-card" key={favorite.id}>
            <img className="favorite-image" src={favorite.image} alt="" />
            <div className="favorite-details">
              <div className="favorite-title">{favorite.title}</div>
              <div className="favorite-category">{favorite.category}</div>
              <div className="favorite-description">{favorite.description}</div>
            </div>
            <div className="favorite-actions">
              <div className="favorite-price">{favorite.price}$</div>
              <Button
                className="add-to-cart-button"
                onClick={() => handleRemoveAndAddToCart(favorite)}
              >
                Добавить в корзину
              </Button>
              <FavoriteIcon onClick={() => removeFromFavorites(favorite)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
