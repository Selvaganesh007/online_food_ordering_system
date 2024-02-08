import React, { useState } from "react";
import "./Login.css";
import { Input } from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastFunction } from "../Register/Helper/Helper";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
    usernameValid: true,
    passwordValid: true,
  });

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

  const navigate = useNavigate();

  const user = useSelector((state) => state.homeSlice.loginUsers);

  const signInData = useSelector((state) => state.homeSlice.signInUsers);

  const validation = signInData.some((items) => {
    return (
      items.username === loginUser.username &&
      items.password === loginUser.password
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const buttonSubmit = () => {
    if (validation) {
      navigate("/");
    } else {
      toastFunction("warn", "type your username and password correctly", 3000);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1 className="login-header">Login </h1>
        <form onSubmit={handleSubmit} className="login-form">
          <ToastContainer />
          <Input
            labelName="Username"
            type="text"
            name="username"
            value={loginUser.username}
            placeholder="enter username"
            handleChange={handleChange}
            className="login-input"
          />
          <Input
            labelName="Password"
            type="password"
            name="password"
            value={loginUser.password}
            placeholder="enter password"
            handleChange={handleChange}
            className="login-input"
          />

          <p className="login-info">
            if you dont have an account
            <span>
              <Link to="/sign-in">
                <strong>&nbsp;&nbsp;sign up</strong>
              </Link>
            </span>
          </p>
          <button className="login-btn" onClick={buttonSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
