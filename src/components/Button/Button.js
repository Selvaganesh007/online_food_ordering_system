import React from "react";
import "./Button.css";
export const Button = ({ buttonName = "", onClick }) => {
  return (
    <div>
      <button className="addbtn" onClick={() => onClick()}>
        {buttonName}
      </button>
    </div>
  );
};
