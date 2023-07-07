import React from "react";
import "./GetAddress.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const GetAddress = () => {
  const navigate = useNavigate();
  const signInData = useSelector((state) => state.homeSlice.signInUsers);
  console.log(signInData);
  const email = signInData !== [] ? signInData[0].email : "pradeep@gmail.com";
  const firstName = signInData !== [] ? signInData[0].firstName : "aefvav";
  const lastName = signInData !== [] ? signInData[0].lastName : "vqearqv";
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
            placeholder="Email"
            defaultValue={email}
          />
          <br />
          <p>If you want to change your Details,you can change below</p>
        </div>
        <div className="address-body">
          <p className="body-header">Shipping address</p>
          <input className="input-address" placeholder=" Country" type="text" />
          <br />
          <input
            className="input-address-firstname"
            placeholder="First Name"
            type="text"
            defaultValue={firstName}
          />
          <input
            className="input-address-lastname"
            placeholder="Last Name"
            type="text"
            defaultValue={lastName}
          />
          <br />
          <input
            className="input-address"
            placeholder="Street, Area, city "
            type="text"
          />
          <input className="input-state" placeholder="State" type="text" />
          <input
            className="input-pincode"
            placeholder="Pin code"
            type="number"
          />
          <br />
          <input
            className="input-address"
            placeholder="Phone numer"
            type="number"
            defaultValue={signInData[0].phoneNumber}
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
