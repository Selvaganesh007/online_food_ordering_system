import React from "react";
import Home from "../DOM/Home/Home";
import "./Base.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../DOM/Cart/Cart.js";
import { Error } from "../MockData/Error";

export const Base = () => {
  return (
    <Router>
      <div className="base">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};
