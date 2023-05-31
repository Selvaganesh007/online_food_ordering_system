import React from "react";
import { food_category } from "../MockData/mockData.js";
export const Radio = () => {
  return (
    <div style={{ margin: "20px" }}>
      {food_category.map((item) => {
        return (
          <>
            <input type="radio" />
            <label>{item}</label>{" "}
          </>
        );
      })}
    </div>
  );
};
