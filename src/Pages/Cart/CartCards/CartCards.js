import React, { useEffect, useState } from "react";
import { Button } from "../../../components/Button/Button";
import "./CartCards.css";

const CartCards = ({ cartItems, RemoveCard, UpdatedCount }) => {
  const [cartCount, setCartCount] = useState(cartItems.count);

  const buttonSub = () => {
    const updatedMinus = cartCount - 1;
    setCartCount(updatedMinus);
    UpdatedCount(cartItems.food_id, updatedMinus);
  };
  const buttonAdd = () => {
    const updatedplus = cartCount + 1;
    setCartCount(updatedplus);
    UpdatedCount(cartItems.food_id, updatedplus);
  };
  return (
    <div className="cart-card">
      <div className="info-card">
        <div className="cartimg-div">
          <img
            src={cartItems.imageLink}
            alt={cartItems.food_name}
            className="cart-food-img"
          />
        </div>
        <div className="name-desc-div">
          <h2 className="cart-card-foodname cart-cardtext">
            {cartItems.food_name}
          </h2>
          <p className="cartcard-food-about cart-cardtext">{cartItems.about}</p>
        </div>
        <div className="cartbtn-div">
          <p className="cart-price">Rs.{cartItems.price}</p>
          <div className="btn-2">
            <div>
              <button
                onClick={buttonSub}
                className="cart-buttonMinus cardtext"
                disabled={cartCount < 2}
              >
                -
              </button>
            </div>
            <p className="cart-count cardtext">{cartCount}</p>
            <div>
              <button
                onClick={buttonAdd}
                className="cart-buttonPlus cardtext"
                disabled={cartCount >= 50}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="cart-btn"
            onClick={() => RemoveCard(cartItems.food_id)}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
