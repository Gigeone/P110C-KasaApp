import React from "react";

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image} alt="Banner1" className="banner-image banner1" />
      <div className="banner-text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default Banner;
