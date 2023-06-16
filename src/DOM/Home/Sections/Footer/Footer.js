import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="location-container">
        <h2 className="location">Location:</h2>
        <p className="address">
          pudhu gramam main road,
          <br />
          kovilpatti - 628 501
        </p>
      </div>
      <div className="follow">
        <h2 className="head">follow us on:</h2>
        <div className="icons">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaGooglePlusG />
          <p> 2023 privacy policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
