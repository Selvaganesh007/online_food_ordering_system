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
    padding: "12px 25px",
    color: "white",
    fontWeight: "bold",
    borderRadius: "20px",
    border: "#4387bf",
    cursor: "pointer",
    fontSize: "12px",
    marginLeft: "60px",
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
        <div className="btn-2">
          <button onClick={buttonSub} className="cart-buttonMinus cardtext">
            -
          </button>
          <p className="cart-count cardtext">{cartCount}</p>
          <button onClick={buttonAdd} className="cart-buttonPlus cardtext">
            +
          </button>
        </div>
        <div>
          <Button
            buttonName="REMOVE"
            onClick={() => removeCard(cartItems.food_id)}
            style={style1}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCards;
