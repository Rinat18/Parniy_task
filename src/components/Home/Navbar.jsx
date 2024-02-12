import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar = () => {
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
        <input placeholder="Найти на Wildberries" type="text" />
        <div className="navbar_links">
          <NavLink>
            <div className="navbar_Navlinks">
              <LocationOnIcon style={{ color: "white" }} />
              <div>Адреса</div>
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
