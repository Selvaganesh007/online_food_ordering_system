import React, { useState } from "react";
import "./Card.css";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "antd";

const Card = ({ items, showCounter, handleAddToCart, buttonName }) => {
  const [count, setCount] = useState(0);

  const buttonAdd = () => {
    setCount(count + 1);
  };
  const buttonSub = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card">
      <h2 className="card-foodname cardtext">{items.food_name}</h2>
      <img src={items.imageLink} alt={items.food_name} className="food-img" />
      <p className="card-food-about cardtext">{items.about}</p>
      <div className="star-price cardtext">
        <h4> {items.star}</h4>
        <h4 className="food-reviews cardtext"> {items.reviews}</h4>
        <h4 className="price cardtext">₹{items.price}</h4>
      </div>
      <div className="card-buttons">
        {
          showCounter ? (
            <>
              <button onClick={buttonSub} className="buttonMinus cardtext">
                -
              </button>
              <p className="count cardtext">{count}</p>
              <button onClick={buttonAdd} className="buttonPlus cardtext">
                +
              </button>
            </>
          ) : ''
        }
        <Button
          onClick={() => handleAddToCart(items)}
          type='primary' 
          // disabled
        >{buttonName}</Button>
      </div>
    </div>
  );
};

export default Card;