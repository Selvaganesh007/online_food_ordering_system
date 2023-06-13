import React, { useState } from "react";
import { Input } from "../Input/Input";
import "./SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { signInUserDetails } from "../../features/SignInUser";
export const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    phoneNumber: "",
    email: "",
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.signinUser.userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    setUserData({
      username: "",
      password: "",
      phoneNumber: "",
      email: "",
    });
  };

  const buttonSubmit = () => {
    let alluser = [];
    if (user !== []) {
      alluser = [...user];
    }
    alluser.push(userData);
    console.log(alluser);
    console.log(dispatch(signInUserDetails(alluser)));
    console.log(user);
  };
  return (
    <div className="container">
      <div className="form">
        <h1>Sign up </h1>
        <form onSubmit={handleSubmit}>
          <Input
            labelName="username"
            type="text"
            name="username"
            value={userData.username}
            placeholder="enter username"
            handleChange={handleChange}
          />
          <Input
            labelName="password"
            type="password"
            name="password"
            value={userData.password}
            placeholder="enter password"
            handleChange={handleChange}
          />
          <Input
            labelName="mobile"
            type="number"
            name="phoneNumber"
            value={userData.phoneNumber}
            placeholder="enter mobile number"
            handleChange={handleChange}
          />
          <Input
            labelName="email"
            type="email"
            name="email"
            value={userData.email}
            placeholder="enter email"
            handleChange={handleChange}
          />
          <br />
          <p>
            if already have an account{" "}
            <span>
              <strong>Login</strong>
            </span>
          </p>
          <button className="btn" type="submit" onClick={buttonSubmit}>
            sign in
          </button>
        </form>
      </div>
    </div>
  );
};
