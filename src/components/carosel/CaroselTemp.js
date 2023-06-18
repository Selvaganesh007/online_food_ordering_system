import React from "react";
import "./CaroselTemp.css";
export const CaroselTemp = ({ image, paragraph, buttonText }) => {
  return (
    <div>
      <img src={image} alt="Carousel Item" className="carosel-img" />
    </div>
  );
};
