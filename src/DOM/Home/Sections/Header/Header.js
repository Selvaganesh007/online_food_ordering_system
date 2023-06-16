import React from "react";
import { Dropdown } from "../../../../components/Dropdown/Dropdown";
import { Radio } from "../../../../components/Radio/Radio";
import { Button } from "../../../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/add-cart");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="nav">
      <div>
        <h1 className="title">Tamil Feast</h1>
      </div>
      <div className="no-title">
        <Radio className="radio" />
        <Dropdown className="drpdwn" />
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Button buttonName="cart" onClick={handleCart} />
        <Button buttonName="Login" onClick={handleLogin} />
      </div>
    </div>
  );
};
export default Header;
