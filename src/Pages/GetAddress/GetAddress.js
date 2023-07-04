import React from "react";
import "./GetAddress.css";

const GetAddress = () => {
  return (
    <div className="address-container">
      <div className="address-card">
        <div className="address-head">
          <h3>User name</h3>
          <p>If you want to change you Details you can change below</p>
        </div>
        <div className="address-body">
          <input className="input-address" />
          <br />
          <input className="input-address" />
          <br />
          <input className="input-address" />
          <br />
          <input className="input-address" />
          <br />
          <input className="input-address" />
        </div>
      </div>
    </div>
  );
};

export default GetAddress;
