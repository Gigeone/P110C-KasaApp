import React, { useState } from "react";

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      {images.length > 1 && (
        <div className="carousel-arrows">
          <div onClick={handlePrev} className="prev">
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
          <div onClick={handleNext} className="next">
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
        {images.map((src, index) => (
          <div
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="slide-counter">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default SlideShow;
