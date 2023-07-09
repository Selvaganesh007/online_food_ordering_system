import React, { useState } from "react";
import "./GetAddress.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initialUserAddress } from "../Register/Helper/Helper";

const GetAddress = () => {
  const [userAddress, setUserAddress] = useState(initialUserAddress);
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUserAddress((preUserData) => ({
      ...preUserData,
      [name]: value,
    }));
    console.log(`${name}:${value}`);
  };
  console.log(userAddress);
  const navigate = useNavigate();
  const signInData = useSelector((state) => state.homeSlice.signInUsers);
  console.log(signInData);
  return (
    <div className="address-container">
      <div className="address-card">
        <div className="address-head">
          <h3>User name</h3>
          <div className="header-aside">
            <p>
              Already have a account <span className="span-login">login</span>
            </p>
          </div>
          <input
            className="input-email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={HandleChange}
            // defaultValue={email}
          />
          <br />
          <p>If you want to change your Details,you can change below</p>
        </div>
        <div className="address-body">
          <p className="body-header">Shipping address</p>
          <input
            className="input-address"
            placeholder=" Country"
            type="text"
            onChange={HandleChange}
          />
          <br />
          <input
            className="input-address-firstname"
            placeholder="First Name"
            type="text"
            name=" firstName"
            onChange={HandleChange}
            // defaultValue={firstName}
          />
          <input
            className="input-address-lastname"
            name="lastName"
            onChange={HandleChange}
            placeholder="Last Name"
            type="text"
            // defaultValue={lastName}
          />
          <br />
          <input
            className="input-address"
            name="address"
            onChange={HandleChange}
            placeholder="Street, Area, city "
            type="text"
          />
          <input
            className="input-state"
            onChange={HandleChange}
            placeholder="State"
            type="text"
            name="state"
          />
          <input
            name="pincode"
            className="input-pincode"
            placeholder="Pin code"
            onChange={HandleChange}
            type="number"
          />
          <br />
          <input
            className="input-address"
            placeholder="Phone numer"
            onChange={HandleChange}
            type="number"
            name="phoneNumber"
            // defaultValue={signInData[0].phoneNumber}
          />
          <br />
          <div className="save-details">
            <input className="input-save-details" type="checkbox" />
            <p> Save this details for next time</p>
          </div>
        </div>
        <div className="div-btn">
          <button className="back-btn" onClick={() => navigate("/add-cart")}>
            Return To Cart
          </button>
          <button className="go-btn" onClick={() => navigate("/final-cart")}>
            Continue to buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetAddress;
