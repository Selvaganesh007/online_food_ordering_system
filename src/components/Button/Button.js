import React from "react";
import "./Button.css";

export const Button = ({ className, buttonName = "", onClick, style }) => {
  return (
    <div>
      <button onClick={() => onClick()} style={style}>
        {buttonName}
      </button>
    </div>
  );
};
