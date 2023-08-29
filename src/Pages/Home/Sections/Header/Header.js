import React, { useState, useEffect } from "react";
import "./Header.css";
import { Button } from "../../../../components/Button/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [navBarBg, setNavBarBg] = useState("transparent");
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.homeSlice.signInUsers);

  const location = useLocation();
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const isAdmin = false;
  const username = userData !== [] ? "Default user" : userData.firstName;
  const btnName = isAdmin ? "admin" : "cart";

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

  return (
    <div
      className="nav"
      style={{
        backgroundColor:
          location.pathname === "/add-cart"
            ? "rgba(88, 152, 196, 1)"
            : navBarBg,
      }}
    >
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
          {
            <p className="user-name">Hi,{username}</p>

            //  <Button
            //     style={style}
            //     buttonName="Login"
            //     className="elements"
            //     onClick={() => navigate("/login")}
            //   />
          }
          {isAdmin ? (
            <button
              className="cartbtn"
              onClick={() => navigate("/admin-panel?tab=delivery")}
            >
              {btnName}
            </button>
          ) : (
            <button className="cartbtn" onClick={() => navigate("/add-cart")}>
              {btnName}
            </button>
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
