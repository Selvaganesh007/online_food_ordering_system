import React from "react";
import Home from "../DOM/Home/Home";
import "./Base.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../DOM/Cart/Cart.js";
import { Error } from "../MockData/Error";
import { Login } from "../components/Login/Login";
import { SignUp } from "../components/Register/SignUp";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";

export const Base = () => {
  return (
    <Router>
      <div className="base">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-cart" element={<Cart />} />
          <Route path="/sign-in" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};
