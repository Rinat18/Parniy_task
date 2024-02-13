import React, { useEffect, useState } from "react";
import "./Home.css";
import { NavLink, useSearchParams } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useProduct } from "../../context/ProductContextProvider";
const Navbar = () => {
  const { fetchByParams } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  function search_Btn() {
    fetchByParams("title", value);
    // setSearch(value)
  }

  return (
    <div className="header">
      <div className="container">
        <NavLink to={"/"}>
          <img
            className="header_logo"
            src="https://static-basket-01.wbbasket.ru/vol0/i/v3/header/logo.svg"
            alt="wildberries"
          />
        </NavLink>
        <div className="input">
          <input
            onChange={(e) => setValue(e.target.value)}
            placeholder="Найти на Wildberries"
            type="text"
          />
          <button onClick={() => search_Btn()}>Поиск</button>
        </div>

        <div className="navbar_links">
          <NavLink>
            <div className="navbar_Navlinks">
              <LocationOnIcon style={{ color: "white" }} />
              <div>Адреса</div>
            </div>
          </NavLink>
          <NavLink to={"/favorites"}>
            <div className="navbar_Navlinks">
              <FavoriteIcon style={{ color: "white" }} />
              <div>Избранные</div>
            </div>
          </NavLink>
          <NavLink>
            <div className="navbar_Navlinks">
              <PersonIcon style={{ color: "white" }} />
              <div>Войти</div>
            </div>
          </NavLink>
          <NavLink to={"/cart"}>
            <div className="navbar_Navlinks">
              <ShoppingCartIcon style={{ color: "white" }} />
              <div>Корзина</div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
