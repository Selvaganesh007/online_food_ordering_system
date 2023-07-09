import React, { useState } from "react";
import "./Card.css";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "antd";
import { PRODUCT_KEYS } from "../../Pages/Register/Helper/Helper";
import { toastFunction } from "../../Pages/Register/Helper/Helper";

const Card = ({ items, showCounter, handleAddToCart }) => {
  const {
    food_id,
    food_name,
    imageLink,
    about,
    food_category,
    reviews,
    star,
    description,
    timing,
    price,
  } = items;
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const buttonAdd = () => {
    if (50 > count) {
      const plus = count + 1;
      setCount(plus);
    }
  };
  const buttonSub = () => {
    if (count > 0) {
      const minus = count - 1;
      setCount(minus);
    }
  };
  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value);
    if (50 > inputValue) {
      setCount(inputValue);
    }
  };
  const buttonCart = () => {
    if (count > 0) {
      setIsClicked(true);
      Object.assign(items, { count: count });
      handleAddToCart(items);
    } else {
      toastFunction("warn", "Add atleast one item", 2000);
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
        {showCounter ? (
          <>
            <button onClick={buttonSub} className="buttonMinus cardtext">
              -
            </button>
            <input
              type="text"
              value={count}
              className="input-count"
              onChange={handleChange}
              inputMode="numeric"
            />
            <button onClick={buttonAdd} className="buttonPlus cardtext">
              +
            </button>
          </>
        ) : (
          ""
        )}
        <button
          className={isClicked ? "clicked" : "notClicked"}
          onClick={buttonCart}
        >
          {isClicked ? "item in cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default Card;
