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
import AdminPanel from '../Pages/AdminPanel/AdminPanel';
import history from './History'; 

export const Base = () => {
  const isAdmin = true;
  return (
    <Router history={history}>
      <div className="base">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/add-cart" element={<Cart />} />
          <Route path="/sign-in" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {
            isAdmin && <Route path="/admin-panel?tab=delivery" element={<AdminPanel />} />
          }
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};
