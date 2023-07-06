import React from "react";
import "./GetAddress.css";

const GetAddress = () => {
  return (
    <div className="address-container">
      <div className="address-card">
        <div className="address-head">
          <h3>User name</h3>
          <div className="header-aside">
            <p>Contact</p>
            <p>Already have a account login</p>
          </div>
          <input
            className="input-email"
            type="email"
            placeholder="Enter the email"
          />
          <br />
          <p>If you want to change you Details you can change below</p>
        </div>
        <div className="address-body">
          <p className="body-header">Shipping address</p>
          <input className="input-address" placeholder="Enter Country" />
          <br />
          <input className="input-address-firstname" placeholder="First Name" />
          <input className="input-address-lastname" placeholder="Last Name" />
          <br />
          <input className="input-address" placeholder="Enter Address" />
          <br />
          <input className="input-address" placeholder="Enter phone numer" />
        </div>
        <div className="div-btn">
          <button className="back-btn">Return To Cart</button>
          <button className="go-btn">Continue to buy</button>
        </div>
      </div>
    </div>
  );
};

export default GetAddress;
