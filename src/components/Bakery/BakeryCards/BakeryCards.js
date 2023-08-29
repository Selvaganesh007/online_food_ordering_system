import React from "react";
import "./BakeryCards.css";

export const BakeryCards = ({ items }) => {
  return (
    <div className="bakery-cards">
      <h3 className="bakery-foodname">{items.food_name}</h3>
      <img src={items.imageLink} alt="img" className="bakery-img" />
      <p className="bakery-about">{items.about}</p>
      <p>Rs.{items.price}</p>
      <button className="bakery-btn">Add Cart</button>
    </div>
  );
};
