import React, { useState } from "react";
import "./Cards.css";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/Addcartprop";
import { useSelector } from "react-redux";
export const Cards = ({ items }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const cartvalue = useSelector((state) => state.addCart.value);
  const buttonAdd = () => {
    setCount(count + 1);
  };
  const buttonSub = () => {
    setCount(count - 1);
  };

  const HandleCart = (items) => {
    console.log(dispatch(addCart(items)));
  };

  console.log(cartvalue);
  return (
    <>
      <div className="cards">
        <div className="container">
          <h2> Food name:{items.food_name}</h2>
          <h4>Food category:{items.food_category}</h4>
          <h4>Reviews:{items.reviews}</h4>
          <h4>Timing:{items.timing}</h4>
          <h4>Star:{items.star}</h4>
        </div>
        <div className="addcart">
          <button onClick={buttonSub}>-</button>
          <p>{count}</p>
          <button onClick={buttonAdd}>+</button>
          <button onClick={() => HandleCart(items)}>Add To Cart</button>
        </div>
      </div>
    </>
  );
};
