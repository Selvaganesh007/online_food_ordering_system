import React from "react";
import { food_category } from "../../MockData/mockData.js";
import { OptionValue } from "../../features/Radioprop.js";
import { useDispatch } from "react-redux";
import "./Radio.css";
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
                dispatch(OptionValue(e.target.value));
              }}
            />
            <label className="radio-label ">{item}</label>{" "}
          </div>
        );
      })}
    </div>
  );
};
