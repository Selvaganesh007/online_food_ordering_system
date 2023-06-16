import React, { useState } from "react";
import "./Login.css";
import { Input } from "../Input/Input";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUserDetails } from "../../features/LoginUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
    usernameValid: true,
    passwordValid: true,
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginUser.userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValid = validationField(name, value);
    setLoginUser((prevLoginUser) => ({
      ...prevLoginUser,
      [name]: value,
      [`${name}Valid`]: isValid,
    }));

    function validationField(name, value) {
      if (name === "username") {
        if (value.includes(" ")) {
          console.log(`space in ${name}`);
          return false;
        }
      }
      if (name === "password") {
        const passwordRegex =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return passwordRegex.test(value);
      }
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const buttonSubmit = () => {
    if (loginUser.username === "" || loginUser.password === "") {
      toast.warn("Fill all the required fields", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      toast.success("you successfully logged in", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      let Alluser = [];
      if (user !== []) {
        Alluser = [...user];
      }
      Alluser.push(loginUser);
      console.log(Alluser);
      console.log(dispatch(LoginUserDetails(Alluser)));
    }
  };
  return (
    <div className="container">
      <div className="form">
        <h1>Login </h1>
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <Input
            labelName="username"
            type="text"
            name="username"
            value={loginUser.username}
            placeholder="enter username"
            handleChange={handleChange}
          />
          {!loginUser.usernameValid && <p>Please enter a valid name</p>}
          <Input
            labelName="password"
            type="password"
            name="password"
            value={loginUser.password}
            placeholder="enter password"
            handleChange={handleChange}
          />
          {!loginUser.passwordValid && (
            <p>
              Please enter a valid password (at least 8 characters, with one
              uppercase letter, one lowercase letter, and one number)
            </p>
          )}
          <p>
            if you dont have an account{" "}
            <span>
              <Link to="/sign-in">
                <strong>sign up</strong>
              </Link>
            </span>
          </p>
          <button className="btn" onClick={buttonSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
