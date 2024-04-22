import React from "react";

const StarRating = ({ ratings }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={index < ratings ? "red-star" : "gray-star"}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.3 7.1h7.7l-6 4.7 2.3 7.1-6-4.6-6 4.6 2.3-7.1-6-4.7h7.7z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
