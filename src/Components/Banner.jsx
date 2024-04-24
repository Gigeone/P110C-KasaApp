import React from "react";

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner-image" />
      <div className="banner-text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default Banner;

// export const Banner1 = ({ image }) => {
//   return (
//     <div className="banner">
//       <img src={image} alt="Banner1" className="banner-image banner1" />
//       <div className="banner-text">
//         Chez vous,{" "}
//         <span className="text-mobile-split">partout et ailleurs</span>
//       </div>
//     </div>
//   );
// };

// export const Banner2 = ({ image }) => {
//   return (
//     <div className="banner">
//       <img src={image} alt="Banner2" className="banner-image banner2" />
//     </div>
//   );
// };
