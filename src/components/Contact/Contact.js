import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" className="contact-input" />
        <input type="email" placeholder="Email" className="contact-input" />
        <textarea
          placeholder="Message"
          rows={5}
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Submit
        </button>
      </form>
    </div>
  );
};
