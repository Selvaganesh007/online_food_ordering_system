import React from "react";
import "./BakeryCards.css";

export const BakeryCards = ({ items }) => {
  return (
    <div className="bakery-cards">
      <h3>{items.food_name}</h3>
      <p>{items.about}</p>
      <p>{items.timing}</p>
    </div>
  );
};
