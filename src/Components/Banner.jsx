import React from "react";

const Banner = ({ image }) => {
  return (
    <div className="banner">
      <img src={image} alt="Banner1" className="banner-image banner1" />
      <div className="banner-text">
        Chez vous,{" "}
        <span className="text-mobile-split">partout et ailleurs</span>
      </div>
    </div>
  );
};

export default Banner;
