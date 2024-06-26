import React from "react";
import Dropdown from "../Components/Dropdown";
import aboutList from "../Data/aboutList.json";
import Banner from "../Components/Banner";
import imageBanner2 from "../Assets/imageBanner2.png";

const About = () => {
  return (
    <div className="about-page">
      <Banner image={imageBanner2} />
      <div className="dropdown-list">
        {aboutList.map((item) => (
          <Dropdown key={item.title} label={item.title} data={item.content} />
        ))}
      </div>
    </div>
  );
};

export default About;
