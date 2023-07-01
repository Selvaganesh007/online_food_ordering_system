import React from "react";
import "./Radio.css";
import { food_category } from "../../MockData/mockData.js";
import { useDispatch } from "react-redux";
import { radioOptionAction } from "../../features/HomeSlice.js";

export const Radio = () => {
  const dispatch = useDispatch();
  return (
    <div className="radio-container">
      {food_category.map((item) => {
        return (
          <div className="radio-div">
            <input
              className="radio-label "
              type="radio"
              value={item}
              name="foodCategory"
              onChange={(e) => {
                dispatch(radioOptionAction(e.target.value));
              }}
            />
            <label className="radio-label ">{item}</label>{" "}
          </div>
        );
      })}
    </div>
  );
};
