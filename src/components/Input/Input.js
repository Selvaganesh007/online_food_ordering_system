import React from "react";
import "./Input.css";
export const Input = ({
  labelName,
  type,
  handleChange,
  placeholder,
  value,
  name,
}) => {
  return (
    <>
      <label>{`${labelName}:`} </label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};
