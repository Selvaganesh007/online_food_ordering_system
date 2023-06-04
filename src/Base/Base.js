import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../DOM/Header/Header.js";
import Footer from "../DOM/Footer/Footer.js";
import Body from "../DOM/Body/Body.js";
export const Base = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
