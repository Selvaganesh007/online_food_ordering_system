import React, { useState, useEffect } from "react";
import "./Header.css";
import { Button } from "../../../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [navBarBg, setNavBarBg] = useState("transparent");
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.homeSlice.signInUsers);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      console.log(isScrolled);
      setNavBarBg(isScrolled ? " rgba(88, 152, 196, 1)" : "transparent");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isAdmin = false;

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
    <div className="nav" style={{ backgroundColor: navBarBg }}>
      <div className="nav-title">
        <h1 className="title">Anand Sweets</h1>
      </div>
      <div className="nav-links">
        <ul className={`navbar-links ${showMenu ? "show" : ""}`}>
          <div className="links">
            <li className="nav-li">
              <Link className="linkelements text-link" to="/">
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
          {
            userData === [] ? (
              <p className="user-name">Hi,user</p>
            ) : (
              <p className="user-name">{`Hi,${userData.firstName}`} </p>
            )
            //  <Button
            //     style={style}
            //     buttonName="Login"
            //     className="elements"
            //     onClick={() => navigate("/login")}
            //   />
          }
          {isAdmin ? (
            <Button
              buttonName="Admin"
              className="elements"
              onClick={() => navigate("/admin-panel?tab=delivery")}
              style={style}
            />
          ) : (
            <Button
              buttonName="cart"
              className="elements"
              onClick={() => navigate("/add-cart")}
              style={style}
            />
          )}
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
