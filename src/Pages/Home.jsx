import React from 'react'
import Cards from '../Components/Cards'
import homes from '../Data/appartements.json'
import Banner from '../Components/Banner'

const Home = () => {

  return (
    <div className="home">
      <Banner />
      <div className="homes">
      {homes.map((home, index) => (
        <Cards key={index} cover={home.cover} title={home.title} />
      ))}
      </div>
    </div>
  );
};


export default Home