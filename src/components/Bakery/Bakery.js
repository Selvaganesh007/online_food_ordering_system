import React from "react";
import "./Bakery.css";
import { BakeryCardData } from "../../MockData/BakeryCardData";
import { BakeryCards } from "./BakeryCards/BakeryCards.js";
export const Bakery = () => {
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
