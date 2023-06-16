import React, { useState } from "react";
import { Button } from "../../../components/Button/Button";
import "./CartCards.css";
const CartCards = ({ cartItems, removeCard }) => {
  const [cartCount, setCartCount] = useState(cartItems.count);
  const buttonSub = () => {
    setCartCount(cartCount - 1);
  };
  const buttonAdd = () => {
    setCartCount(cartCount + 1);
  };
  const style1 = {
    padding: "8px 11px",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#4387bf",
    borderRadius: "10px",
    border: "#4387bf",
    cursor: "pointer",
    fontSize: "12px",
    backgroundColor: "black",
  };
  return (
    <div className="cart-card">
      <div className="info-card">
        <img
          src={cartItems.imageLink}
          alt={cartItems.food_name}
          className="cart-food-img"
        />
        <h2 className="cart-card-foodname cart-cardtext">
          {cartItems.food_name}
        </h2>

        <p className="cart-card-food-about cart-cardtext">{cartItems.about}</p>
      </div>
      <div className="cart-card-buttons ">
        <button onClick={buttonSub} className="cart-buttonMinus cart-cardtext">
          -
        </button>
        <p className="cart-count cart-cardtext">{cartCount}</p>
        <button onClick={buttonAdd} className="cart-buttonPlus cart-cardtext">
          +
        </button>

        <Button
          buttonName="Remove"
          onClick={() => removeCard(cartItems.food_id)}
          style={style1}
        />
      </div>
    </div>
  );
};

export default CartCards;
