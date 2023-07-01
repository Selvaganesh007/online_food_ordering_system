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
  console.log(addCartDetails);
  // const [cards, setCards] = useState(addCartDetails);
  const dispatch = useDispatch();
  const RemoveCard = (id) => {
    const removableItems = addCartDetails.filter((cards) => {
      return cards.food_id !== id;
    });
    // setCards(removableItems);
    dispatch(removeCartAction(removableItems));
  };
  return (
    <div className="cart-container">
      <div>
        <div>
          <Header />
          <div className="cart">
            <div>
              {addCartDetails.map((items) => {
                return <CartCards cartItems={items} RemoveCard={RemoveCard} />;
              })}
            </div>
            <div>
              <CardTable cards={addCartDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
