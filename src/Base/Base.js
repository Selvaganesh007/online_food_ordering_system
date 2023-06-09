import React from "react";
import Header from "../DOM/Header/Header.js";
import Footer from "../DOM/Home/Sections/Footer/Footer.js";
import Body from "../DOM/Home/Home.js";
import "./Base.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "../components/Button/Button.js";
import Cart from "../DOM/Cart/Cart.js";
export const Base = () => {
  return (
    <Router>
      <div className="base">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};
