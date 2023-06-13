import React, { useState } from "react";
import "./Login.css";
import { Input } from "../Input/Input";

export const Login = () => {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginUser((prevLoginUser) => ({
      ...prevLoginUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginUser);
  };
  return (
    <div className="container">
      <div className="form">
        <h1>Login </h1>
        <form onSubmit={handleSubmit}>
          <Input
            labelName="username"
            type="text"
            name="username"
            value={loginUser.username}
            placeholder="enter username"
            handleChange={handleChange}
          />
          <Input
            labelName="password"
            type="password"
            name="password"
            value={loginUser.password}
            placeholder="enter password"
            handleChange={handleChange}
          />
          <p>
            if you dont have an account{" "}
            <span>
              <strong>sign up</strong>
            </span>
          </p>
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};
