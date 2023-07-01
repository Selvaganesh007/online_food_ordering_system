import React, { useState } from "react";
import { Input } from "../../components/Input/Input";
import "./SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { signInUserDetails } from "../../features/SignInUser";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initialUserData } from "./Helper/Helper";

const SignUp = () => {
  const [userData, setUserData] = useState(initialUserData);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.signinUser.userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValid = validateField(name, value);

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
      [`${name}Valid`]: isValid,
    }));
  };

  const validateField = (name, value) => {
    if (name === "username" || name === "email" || name === "password") {
      if (value.includes(" ")) {
        console.log(`space found in ${name}`);
        return false;
      }
    }

    if (name === "password") {
      const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      return passwordRegex.test(value);
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userData.usernameValid &&
      !userData.phoneNumberValid &&
      !userData.emailValid &&
      !userData.passwordValid
    ) {
      toast.warn("enter your data correctly", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      setUserData(initialUserData);
    }
  };

  const buttonSubmit = () => {
    if (
      userData.username === "" &&
      userData.password === "" &&
      userData.email === ""
    ) {
      toast.warn("Fill all the required fields", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      toast.success("you successfully signed in", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      let alluser = [];
      if (user !== []) {
        alluser = [...user];
      }
      alluser.push(userData);
      console.log(dispatch(signInUserDetails(alluser)));
    }
  };
  return (
    <div className="container">
      <div className="form">
        <h1>Create an account </h1>
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <Input
            labelName="username"
            type="text"
            name="username"
            value={userData.username}
            placeholder="enter username"
            handleChange={handleChange}
          />
          {!userData.usernameValid && <p>Please enter a valid name</p>}
          <Input
            labelName="password"
            type="password"
            name="password"
            value={userData.password}
            placeholder="enter password"
            handleChange={handleChange}
          />
          {!userData.passwordValid && (
            <p>
              Please enter a valid password (at least 8 characters, with one
              uppercase letter, one lowercase letter, and one number)
            </p>
          )}

          <Input
            labelName="mobile"
            type="number"
            name="phoneNumber"
            value={userData.phoneNumber}
            placeholder="enter mobile number"
            handleChange={handleChange}
          />
          {!userData.phoneNumberValid && (
            <p>Please enter a valid phone number</p>
          )}
          <Input
            labelName="email"
            type="email"
            name="email"
            value={userData.email}
            placeholder="enter email"
            handleChange={handleChange}
          />
          {!userData.emailValid && <p>Please enter a valid email</p>}
          <Input
            labelName="address"
            type="address"
            name="address"
            value={userData.address}
            placeholder="enter address"
            handleChange={handleChange}
          />
          <Input
            labelName="landmark"
            type="landmark"
            name="landmark"
            value={userData.landmark}
            placeholder="enter landmark"
            handleChange={handleChange}
          />
          <br />
          <p>
            if you already have an account
            <span>
              <Link to="/">
                <strong>Log in</strong>
              </Link>
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

export default SignUp;