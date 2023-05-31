import React from "react";
import { get_food_details } from "../MockData/mockData";
import "./Cards.css";
import { useSelector } from "react-redux";

export const Cards = () => {
  const dropDownoption = useSelector((state) => state.dropDown.value);
  console.log(dropDownoption);
  const filteredcards = get_food_details.filter((items) => {
    return items.timing === dropDownoption;
  });
  // console.log(filteredcards);

  return (
    <>
      {dropDownoption == 0
        ? get_food_details.map((items) => {
            return (
              <>
                <div className="cards">
                  <div className="container">
                    <h2 key={items.id}>Food name:{items.food_name}</h2>
                    <h4 key={items.id}>Food category:{items.food_category}</h4>
                    <h4 key={items.id}>Reviews:{items.reviews}</h4>
                    <h4 key={items.id}>Timing:{items.timing}</h4>
                    <h4 key={items.id}>Star:{items.star}</h4>
                  </div>
                </div>
              </>
            );
          })
        : filteredcards.map((items) => {
            return (
              <>
                <div className="cards">
                  <div className="container">
                    <h2 key={items.id}> Food name:{items.food_name}</h2>
                    <h4 key={items.id}>Food category:{items.food_category}</h4>
                    <h4 key={items.id}>Reviews:{items.reviews}</h4>
                    <h4 key={items.id}>Timing:{items.timing}</h4>
                    <h4 key={items.id}>Star:{items.star}</h4>
                  </div>
                </div>
              </>
            );
          })}
    </>
  );
};
