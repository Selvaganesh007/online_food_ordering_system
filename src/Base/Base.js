import React from "react";
import Home from "../Pages/Home/Home";
import "./Base.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart/Cart.js";
import Error from "../MockData/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AdminPanel from "../Pages/AdminPanel/AdminPanel";
import GetAddress from "../Pages/GetAddress/GetAddress";
import FinalCart from "../Pages/FinalCart/FinalCart";

export const Base = () => {
  const isAdmin = true;

  return (
    <Router>
      <div className="base">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-cart" element={<Cart />} />
          <Route path="/sign-in" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {isAdmin && (
            <Route path="/admin-panel" element={<AdminPanel />} />
          )}
          <Route path="/Get-Address" element={<GetAddress />} />
          <Route path="/final-cart" element={<FinalCart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};
