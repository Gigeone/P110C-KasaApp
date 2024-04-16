import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo1 from "../Assets/LOGO.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo1} alt="logo Kasa" className="logo" />
      <NavLink className="nav">
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </NavLink>
    </header>
  );
};

export default Header;
