import React from "react";
import Logo2 from "../Assets/LOGO1.png";
const Footer = () => {
  return (
    <footer className="footer">
      <img alt="logo Kasa" src={Logo2} className="logo"></img>
      <div className="phrase">
        © 2020 Kasa. All <span className="mobile-text"> rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
