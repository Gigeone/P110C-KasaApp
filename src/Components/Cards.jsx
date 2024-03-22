import React from 'react'

const Cards = ({ cover, title }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${cover})` }}>
      <div className="title">{title}</div>
    </div>
  );
};

export default Cards