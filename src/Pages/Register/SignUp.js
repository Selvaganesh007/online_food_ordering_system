import React, { useState } from "react";
import { Input } from "../../components/Input/Input";
import "./SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initialUserData, toastFunction } from "./Helper/Helper";
import { signInUserAction } from "../../features/HomeSlice";

const SignUp = () => {
  const [userData, setUserData] = useState(initialUserData);
  const {
    userid,
    username,
    password,
    phoneNumber,
    email,
    address,
    landmark,
    firstName,
    usernameValid,
    phoneNumberValid,
    emailValid,
    passwordValid,
    lastName,
  } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValid = validateField(name, value);

    setUserData((prevUserData) => ({
      ...prevUserData,
      userid: prevUserData.userid + 1,
      [name]: value,
      [`${name}Valid`]: isValid,
    }));
  };

  const validateField = (name, value) => {
    if (name === "username" || name === "email" || name === "password") {
      if (name === "password") {
        const passwordRegex =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return passwordRegex.test(value);
      }
      return !value.includes(" ");
    }
    return true;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signinData = useSelector((state) => state.homeSlice.signInUsers);
  console.log(setUserData);
  // const validationUsername = signinData.map((items) => {
  //   return items.username !== username;
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameValid && phoneNumberValid && emailValid && passwordValid) {
      setUserData(initialUserData);
    }
  };

  const buttonSubmit = () => {
    if (
      username === "" &&
      password === "" &&
      email === "" &&
      phoneNumber === ""
    ) {
      toastFunction("warn", "enter the fields correctly..", 3000);
    } else {
      let alluser = [];
      if (signinData !== []) {
        alluser = [...signinData];
      }
      alluser.push(userData);
      dispatch(signInUserAction(alluser));
      navigate("/login");
      toastFunction("success", "you successfully signed in ", 3000);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1>Create an account </h1>
        <form onSubmit={handleSubmit}>
          <Input
            labelName="username"
            type="text"
            name="username"
            value={username}
            placeholder="enter username"
            handleChange={handleChange}
          />
          {!usernameValid && <p>Please enter a valid name</p>}
          <Input
            labelName="First name"
            type="text"
            name="firstName"
            value={firstName}
            placeholder="enter firstName"
            handleChange={handleChange}
          />
          <Input
            labelName="lastName"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="enter lastName"
            handleChange={handleChange}
          />
          <Input
            labelName="password"
            type="password"
            name="password"
            value={password}
            placeholder="enter password"
            handleChange={handleChange}
          />
          {!passwordValid && (
            <p>
              Please enter a valid password (at least 8 characters, with one
              uppercase letter, one lowercase letter, and one number)
            </p>
          )}

          <Input
            labelName="mobile"
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="enter mobile number"
            handleChange={handleChange}
          />
          {!phoneNumberValid && <p>Please enter a valid phone number</p>}
          <Input
            labelName="email"
            type="email"
            name="email"
            value={email}
            placeholder="enter email"
            handleChange={handleChange}
          />
          {!emailValid && <p>Please enter a valid email</p>}
          <Input
            labelName="address"
            type="address"
            name="address"
            value={address}
            placeholder="enter address"
            handleChange={handleChange}
          />
          <Input
            labelName="landmark"
            type="landmark"
            name="landmark"
            value={landmark}
            placeholder="enter landmark"
            handleChange={handleChange}
          />
          <br />
          <p>
            if you already have an account
            <span>
              <Link to="/login">
                <strong>Log in</strong>
              </Link>
            </span>
          </p>
          <button className="btn" type="submit" onClick={buttonSubmit}>
            sign in
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
