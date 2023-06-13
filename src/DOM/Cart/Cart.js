import React, { useState } from "react";
import CartCards from "./CartCards/CartCards";
import { useSelector } from "react-redux";
import CardTable from "./CartTable/CartTable";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { removeCart } from "../../features/Addcartprop";

const Cart = () => {
  const addCartDetails = useSelector((state) => state.addCart.cartItems);
  const [cards, setCards] = useState(addCartDetails);
  const dispatch = useDispatch();
  function removeCard(id) {
    const removableItems = (prevcards) =>
      prevcards.filter((cards) => {
        return cards.food_id !== id;
      });
    setCards(removableItems);
    dispatch(removeCart(cards));
    console.log(cards);
  }
  console.log(cards);
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
