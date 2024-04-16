import React from "react";

const Cards = ({ cover, title }) => {
  return (
    <div className="logements-card">
      <div className="card-cover">
        <img src={cover} alt={title} />
        <div className="card-content">{title}</div>
      </div>
    </div>
  );
};

export default Cards;
