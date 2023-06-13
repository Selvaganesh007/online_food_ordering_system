import React from "react";
import { Button } from "../../../components/Button/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CartCards = () => {
  let addCartDetails = useSelector((state) => state.addCart.cartItems);
  console.log(addCartDetails);
  let stateCount = addCartDetails.map((items, index) => {
    return items.count;
  });
  const [cards, setCards] = useState(addCartDetails);
  const [cartCount, setCartCount] = useState(0);
  const buttonSub = () => {
    setCartCount(cartCount - 1);
  };
  const buttonAdd = () => {
    setCartCount(cartCount + 1);
  };
  useEffect(() => {
    setCartCount(stateCount);
  }, []);

  const removeCard = (id) => {
    setCards((prevcards) =>
      prevcards.filter((cards) => {
        return cards.food_id !== id;
      })
    );
    console.log(cards);
  };

  return (
    <div>
      {cards.map((cartItems) => {
        return (
          <div className="card-row">
            <div className="card">
              <h2>Food name: {cartItems.food_name}</h2>
              <h4>Food category: {cartItems.food_category}</h4>
              <h4>Reviews: {cartItems.reviews}</h4>
              <h4>Timing: {cartItems.timing}</h4>
              <h4>Star: {cartItems.star}</h4>
              <h4>Price: ₹{cartItems.price}</h4>
              <div className="card-buttons">
                <button onClick={buttonSub} className="button-2">
                  -
                </button>
                <p>{cartCount}</p>
                <button onClick={buttonAdd} className="button-2">
                  +
                </button>
                <Button
                  buttonName="Remove"
                  onClick={() => removeCard(cartItems.food_id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartCards;
