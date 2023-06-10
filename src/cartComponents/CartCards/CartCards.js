import React from "react";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
const CartCards = ({ cartItems }) => {
  //   console.log(cartItems);
  const rupees = "₹";
  const [cartCount, setCartCount] = useState(cartItems.count);
  const buttonSub = () => {
    setCartCount(cartCount - 1);
  };
  const buttonAdd = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div>
      <div className="card-row">
        <div className="card">
          <h2>Food name: {cartItems.food_name}</h2>
          <h4>Food category: {cartItems.food_category}</h4>
          <h4>Reviews: {cartItems.reviews}</h4>
          <h4>Timing: {cartItems.timing}</h4>
          <h4>Star: {cartItems.star}</h4>
          <h4>
            Price: {rupees}
            {cartItems.price}
          </h4>
          <div className="card-buttons">
            <button onClick={buttonSub} className="button-2">
              -
            </button>
            <p>{cartCount}</p>
            <button onClick={buttonAdd} className="button-2">
              +
            </button>
            <Button buttonName="Remove" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
