import React from "react";
import CartCards from "../../cartComponents/CartCards/CartCards";
import { useSelector } from "react-redux";
import CardTable from "../../cartComponents/CartTable/CartTable";
import "./Cart.css";
const Cart = () => {
  const addCartDetails = useSelector((state) => state.addCart.value);
  return (
    <div className="cart">
      <CartCards cartItems={addCartDetails} />
      <CardTable />
    </div>
  );
};

export default Cart;
