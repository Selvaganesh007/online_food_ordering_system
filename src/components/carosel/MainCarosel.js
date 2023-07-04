import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./MainCarosel.css";
import { CaroselTemp } from "./CaroselTemp";
import { carouselItems } from "../../MockData/mockData";
import { Link } from "react-router-dom";
export const MainCarosel = () => {
  return (
    <div className="maincarosel">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={false}
        showThumbs={false}
        width="100%"
      >
        {carouselItems.map((item, index) => (
          <CaroselTemp key={index} image={item.image} />
        ))}
      </Carousel>
      <div className="carosel-div">
        <p className="carosel-para">
          A new way to <br />
          experience the food​ . . .
        </p>
        <button className="carosel-btn">
          <Link to="/about" className="link-btn">
            Read More...
          </Link>
        </button>
      </div>
    </div>
  );
};
