import React from "react";
import "./Bakery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BakeryCardData } from "../../MockData/BakeryCardData";
import { BakeryCards } from "./BakeryCards/BakeryCards.js";
export const Bakery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
  };
  return (
    <div className="bakery-page">
      <img
        src="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="foodimage"
        className="bg-img"
      />
      <div className="heading">
        <h2>Bakery Menu</h2>
      </div>

      <div className="card-container">
        {BakeryCardData.map((items) => {
          return <BakeryCards items={items} />;
        })}
      </div>
    </div>
  );
};
