import React from "react";
import { Dropdown } from "../components/Dropdown";
import { Button } from "../components/Button";
import { Radio } from "../components/Radio";
import "../css/Header.css";
const Header = () => {
  return (
    <div className="header" style={{ backgroundColor: "lightgreen" }}>
      <h1>CCC</h1>
      <Radio className="radio" />
      <Dropdown className="drpdwn" />
      <Button className="addbtn" />
    </div>
  );
};
export default Header;
