import React from 'react'
import Cards from '../Components/Cards'
import appartements from '../Data/appartements.json'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="home">
      <Banner />
      <div className="homes">
      {appartements.map((appartement) => (
        <Link to={`/appartement/${appartement.id}`} key={appartement.id}>
          <Cards cover={appartement.cover} title={appartement.title} />
        </Link>
        
      ))}
      </div>
    </div>
  );
};


export default Home