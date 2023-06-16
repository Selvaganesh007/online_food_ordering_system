import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./MainCarosel.css";
export const MainCarosel = () => {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      showIndicators={false}
      showThumbs={false}
      width="100%"
    >
      <div>
        <img
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="img"
          alt="food.img"
        />
        <div className="parent-div">
          <div className="para-button">
            <p className="food-quote">
              A new way to experience
              <br />
              the food.
            </p>
            <button className="read">read more..</button>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="img"
          alt="food.img"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="img"
          alt="food.img"
        />
      </div>
    </Carousel>
  );
};
