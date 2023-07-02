import React, { useState } from "react";
import CartCards from "./CartCards/CartCards";
import { useSelector } from "react-redux";
import CardTable from "./CartTable/CartTable";
import { useDispatch } from "react-redux";
import "./Cart.css";
import Header from "../Home/Sections/Header/Header";
import { removeCartAction } from "../../features/HomeSlice";

const Cart = () => {
  const addCartDetails = useSelector((state) => state.homeSlice.addCart);
  const [cards, setCards] = useState(addCartDetails);
  const dispatch = useDispatch();

  const UpdatedCount = (food_id, cartCount) => {
    const updatedCount = cards.map((items) => {
      return items.food_id === food_id ? { ...items, count: cartCount } : items;
    });
    setCards(updatedCount);
  };

  const RemoveCard = (id) => {
    const filteredData = cards.filter((cards) => {
      return cards.food_id !== id;
    });
    setCards(filteredData);
    dispatch(removeCartAction(filteredData));
  };

  return (
    <div className="cart-container">
      <div>
        <div>
          <Header />
          <div className="cart">
            <div>
              {cards.map((items) => {
                return (
                  <CartCards
                    cartItems={items}
                    RemoveCard={RemoveCard}
                    UpdatedCount={UpdatedCount}
                  />
                );
              })}
            </div>
            <div>
              <CardTable cards={cards} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
