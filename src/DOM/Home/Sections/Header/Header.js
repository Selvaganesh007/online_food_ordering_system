import React, { useState } from "react";
import "./Header.css";
import { Button } from "../../../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleCart = () => {
    navigate("/add-cart");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
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
      <div className="nav-title">
        <h1 className="title">Anand Sweets</h1>
      </div>
      <div className="nav-links">
        <ul className={`navbar-links ${showMenu ? "show" : ""}`}>
          <div className="links">
            <li className="nav-li">
              <Link className="linkelements text-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-li">
              <Link className="linkelements text-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-li">
              <Link className="linkelements text-link" to="/Contact">
                Contact
              </Link>
            </li>
          </div>
        </ul>
        <div className="nav-buttons">
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
        <div className="togglebar">
          <FaBars
            size="25px"
            className="navbar-toggler elements"
            onClick={handleMenuToggle}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
