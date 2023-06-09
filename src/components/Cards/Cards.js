import React, { useState } from "react";
import "./Cards.css";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/Addcartprop";
import { useNavigate } from "react-router-dom";

export const Cards = ({ items }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const cartvalue = useSelector((state) => state.addCart.value);
  const buttonAdd = () => {
    setCount(count + 1);
  };
  const buttonSub = () => {
    setCount(count - 1);
  };

  const HandleCart = (items) => {
    navigate("/add-cart");
    console.log(dispatch(addCart(items)));
  };

  return (
    <div className="card-row">
      <div className="card">
        <h2>Food name: {items.food_name}</h2>
        <h4>Food category: {items.food_category}</h4>
        <h4>Reviews: {items.reviews}</h4>
        <h4>Timing: {items.timing}</h4>
        <h4>Star: {items.star}</h4>
        <div className="card-buttons">
          <button onClick={buttonSub} className="button-2">
            -
          </button>
          <p>{count}</p>
          <button onClick={buttonAdd} className="button-2">
            +
          </button>
          <button onClick={() => HandleCart(items)} className="addcartbtn">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
