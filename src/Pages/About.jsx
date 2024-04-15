import React from "react";
import Dropdown from "../Components/Dropdown";
import aboutList from "../Data/aboutList.json";
import Banner from "../Components/Banner";
import imageBanner2 from "../Assets/imageBanner2.png";
import "./About.scss";

const About = () => {
  return (
    <div>
      <Banner image={imageBanner2} />
      <div className="about-page">
        {aboutList.map((item) => (
          <Dropdown key={item.title} label={item.title} data={item.content} />
        ))}
      </div>
    </div>
  );
};

export default About;
