import React from "react";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { Button } from "../../components/Button/Button";
import { Radio } from "../../components/Radio/Radio";
import "./Header.css";
const Header = () => {
  return (
    <div className="nav">
      <h1>Tamil Feast</h1>
      <Radio className="radio" />
      <Dropdown className="drpdwn" />
      <Button className="addbtn" />
    </div>
  );
};
export default Header;
