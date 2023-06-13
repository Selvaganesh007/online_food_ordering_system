import React, { useState } from "react";
import "./Cards.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../features/Addcartprop";
import { Button } from "../Button/Button.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Cards = ({ items }) => {
  const finalcart = useSelector((state) => state.addCart.cartItems);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const buttonAdd = () => {
    setCount(count + 1);
  };
  const buttonSub = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddCart = () => {
    let allCards = [];
    if (finalcart !== []) {
      allCards = [...finalcart];
    }
    const cartDetails = Object.assign({}, items, { count: count });
    allCards.push(cartDetails);
    if (count !== 0) {
      dispatch(addCart(allCards));

      toast.success("added to cart successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      toast.info("atleast add one item to the cart", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="card-row">
      <div className="card">
        <h2>Food name: {items.food_name}</h2>
        <h4>Food category: {items.food_category}</h4>
        <h4>Reviews: {items.reviews}</h4>
        <h4>Timing: {items.timing}</h4>
        <h4>Star: {items.star}</h4>
        <h4>Price: ₹{items.price}</h4>
        <div className="card-buttons">
          <button onClick={buttonSub} className="button-2">
            -
          </button>
          <p>{count}</p>
          <button onClick={buttonAdd} className="button-2">
            +
          </button>
          <Button buttonName="Add To Cart" onClick={handleAddCart} />
          <ToastContainer theme="dark" />
        </div>
      </div>
    </div>
  );
};
