import React from "react";
import { food_category } from "../../MockData/mockData.js";
import { OptionValue } from "../../features/Radioprop.js";
import { useDispatch } from "react-redux";
import "./Radio.css";
export const Radio = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ margin: "20px" }}>
      {food_category.map((item) => {
        return (
          <>
            <input
              type="radio"
              value={item}
              name="foodCategory"
              onChange={(e) => {
                dispatch(OptionValue(e.target.value));
              }}
            />
            <label>{item}</label>{" "}
          </>
        );
      })}
    </div>
  );
};
