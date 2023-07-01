import React from "react";
import "./Button.css";

export const Button = ({ className, buttonName = "", onClick, style }) => {
  const style1 = {
    padding: "0.7rem 1rem",
    color: "white",
    fontWeight: "bold",
    borderRadius: "0.5rem",
    border: "#4387bf",
    cursor: "pointer",
    fontSize: "0.8rem",
    margin: "0.8rem",
    backgroundColor: "#2196F3",
  };

  return (
    <div>
      <button onClick={() => onClick()} style={style ? style : style1} className={className}>
        {buttonName}
      </button>
    </div>
  );
};
