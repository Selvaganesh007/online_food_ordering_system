import React, { useState } from "react";
import CartCards from "./CartCards/CartCards";
import { useSelector } from "react-redux";
import CardTable from "./CartTable/CartTable";
import "./Cart.css";

const Cart = () => {
  const addCartDetails = useSelector((state) => state.addCart.cartItems);
  const [cards, setCards] = useState(addCartDetails);
  function removeCard(id) {
    setCards((prevcards) =>
      prevcards.filter((cards) => {
        return cards.food_id !== id;
      })
    );
    console.log(cards);
  }
  return (
    <div className="cart">
      {cards.map((items) => {
        return <CartCards cartItems={items} removeCard={removeCard} />;
      })}

      <CardTable cards={cards} />
    </div>
  );
};

export default Cart;
