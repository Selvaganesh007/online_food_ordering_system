import React from "react";
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
  const style = {
    padding: "8px 20px",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#4387bf",
    borderRadius: "10px",
    border: "#4387bf",
    cursor: "pointer",
    fontSize: "12px",
    boxShadow:
      " 0 8px 16px 2px rgba(0,0,0,0.2), 0 6px 21px 5px rgba(0,0,0,0.19)",
  };
  return (
    <div className="nav">
      <div>
        <h1 className="title">Anand Sweets</h1>
      </div>
      <div className="no-title">
        {/* <Radio className="radio" />
        <Dropdown className="drpdwn" /> */}
        <Link className="elements text-link">Home</Link>
        <Link className="elements text-link">About</Link>
        <Link className="elements text-link">Contact</Link>
        <Button
          buttonName="cart "
          className="elements"
          onClick={handleCart}
          style={style}
        />
        <Button
          style={style}
          buttonName="Login "
          className="elements"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};
export default Header;
