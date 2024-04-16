import React, { useState } from "react";
import "./SlideShow.scss";

const SlideShow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slideshow-container">
      {pictures.length > 1 && (
        <div className="carousel-arrows">
          <div onClick={goToPrevSlide} className="prev">
            <svg
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                fill="white"
              />
            </svg>
          </div>
          <div onClick={goToNextSlide} className="next">
            <svg
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      )}
      <div className="slide-image">
        {pictures.map((picture, index) => (
          <div
            key={index}
            style={{ display: index === currentSlide ? "block" : "none" }}
            onClick={() => goToSlide(index)}
          >
            <img src={picture} alt={`Photo ${index}`} />
          </div>
        ))}
      </div>
      {pictures.length > 1 && (
        <div>
          {pictures.map((_, index) => (
            <span key={index} onClick={() => goToSlide(index)} />
          ))}
        </div>
      )}
      {pictures.length > 1 && (
        <div className="slide-counter">
          {currentSlide + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default SlideShow;
