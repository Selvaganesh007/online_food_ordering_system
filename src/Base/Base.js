import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../DOM/Header/Header.js";
import Footer from "../DOM/Footer/Footer.js";
import Body from "../DOM/Body/Body.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "../components/Button/Button.js";
export const Base = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/add-cart" element={<Button />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
