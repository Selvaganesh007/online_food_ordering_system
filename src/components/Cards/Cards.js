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
  const style = {
    padding: "8px 11px",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#4387bf",
    borderRadius: "10px",
    border: "#4387bf",
    cursor: "pointer",
    fontSize: "12px",
    boxShadow:
      " 0 8px 16px 2px rgba(0,0,0,0.2), 0 6px 21px 5px rgba(0,0,0,0.19)",
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
      <div className="card-buttons ">
        <button onClick={buttonSub} className="buttonMinus cardtext">
          -
        </button>
        <p className="count cardtext">{count}</p>
        <button onClick={buttonAdd} className="buttonPlus cardtext">
          +
        </button>

        <Button
          buttonName="ADD TO CART"
          onClick={handleAddCart}
          style={style}
        />
        <ToastContainer theme="dark" />
      </div>
    </div>
  );
};
