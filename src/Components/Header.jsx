import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../Assets/LOGO.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo1} alt="logo Kasa" className="logo" />
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
