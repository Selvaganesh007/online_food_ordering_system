import React, { useState } from "react";
import "./Login.css";
import { Input } from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastFunction } from "../Register/Helper/Helper";
import { loginUserAction } from "../../features/HomeSlice";

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.homeSlice.loginUsers);

  const { signInData, loginData } = useSelector((state) => {
    return {
      signInData: state.homeSlice.signInUsers,
      loginData: state.homeSlice.loginUsers,
    };
  }, shallowEqual);

  const validation = signInData.some((items) => {
    console.log({ items });
    console.log({ loginUser });
    return (
      items.username === loginUser.username &&
      items.password === loginUser.password
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const buttonSubmit = () => {
    console.log(validation);
    if (validation) {
      navigate("/");
    } else {
      toastFunction("warn", "type your username and password correctly", 3000);
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
            if you dont have an account
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

export default Login;
