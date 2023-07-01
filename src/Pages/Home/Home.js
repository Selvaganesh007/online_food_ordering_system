import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { get_food_details } from "../../MockData/mockData";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
import "./Home.css";
import { toastFunction } from "../Register/Helper/Helper";
import { Bakery } from "../../components/Bakery/Bakery.js";
import { Endpage } from "../../components/Endpage/Endpage";
import { MainCarosel } from "../../components/carosel/MainCarosel";
import { Radio } from "../../components/Radio/Radio.js";
import { addCartAction } from "../../features/HomeSlice";

const Home = () => {
  const [foodDetails, SetfoodDetails] = useState([]);
  const radioOption = useSelector((state) => state.homeSlice.radioOption);
  const finalcart = useSelector((state) => state.homeSlice.addCart);
  const [buttonName, setButtonName] = useState("Add to cart");
  const dispatch = useDispatch();

  useEffect(() => {
    if (radioOption === "all") {
      const all = get_food_details.map((val) => {
        return val;
      });
      SetfoodDetails(all);
    } else {
      const filteredradio = get_food_details.filter((val) => {
        return val?.food_category === radioOption;
      });
      SetfoodDetails(filteredradio);
    }
  }, [radioOption]);

  useEffect(() => {
    SetfoodDetails(get_food_details);
  }, []);

  const handleAddToCart = (items) => {
    let allCards = [];
    if (finalcart !== []) {
      allCards = [...finalcart];
    }
    const cartDetails = Object.assign({}, items);
    allCards.push(cartDetails);
    dispatch(addCartAction(allCards));
    toastFunction("success", "cart added successfully", 3000);
  };

  return (
    <div className="home">
      <Header />
      <div className="carosel">
        <MainCarosel />
      </div>
      <Radio />
      <div className="card-row">
        {foodDetails.map((items) => {
          return (
            <Card
              showCounter={false}
              items={items}
              handleAddToCart={handleAddToCart}
              buttonName={buttonName}
            />
          );
        })}
      </div>
      <Bakery />
      <Endpage />
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Home;
