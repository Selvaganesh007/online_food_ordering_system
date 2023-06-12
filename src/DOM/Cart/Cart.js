import React from "react";
import CartCards from "./CartCards/CartCards";
import { useSelector } from "react-redux";
import CardTable from "./CartTable/CartTable";
import "./Cart.css";

const Cart = () => {
  const addCartDetails = useSelector((state) => state.addCart.cartItems);
  console.log(addCartDetails);
  return (
    <div className="cart">
      <CartCards cartItems={addCartDetails} />
      <CardTable />
    </div>
  );
};

export default Cart;
