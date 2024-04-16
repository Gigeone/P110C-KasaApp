import React from "react";
import Cards from "../Components/Cards";
import appartements from "../Data/appartements.json";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import imageBanner1 from "../Assets/imageBanner1.png";

const Home = () => {
  return (
    <div className="home-page">
      <Banner
        image={imageBanner1}
        text={
          "Chez vous, <span class='text-mobile-split'>partout et ailleurs</span>"
        }
      />
      <div className="grid-container">
        {appartements.map((appartement) => (
          <Link to={`/appartement/${appartement.id}`} key={appartement.id}>
            <Cards cover={appartement.cover} title={appartement.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
