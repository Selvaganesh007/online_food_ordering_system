import React, { useEffect, useState } from "react";
import { Cards } from "../../components/Cards/Cards";
import { useSelector } from "react-redux";
import { get_food_details } from "../../MockData/mockData";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
import "./Home.css";
import { Bakery } from "../../components/Bakery/Bakery.js";
import { Endpage } from "../../components/Endpage/Endpage";
import { MainCarosel } from "../../components/carosel/MainCarosel";
import { Radio } from "../../components/Radio/Radio.js";

const Home = () => {
  const [foodDetails, SetfoodDetails] = useState([]);
  const dropDownoption = useSelector((state) => state.dropDown.value);
  const radioOption = useSelector((state) => state.radio.value);
  //dropdown filter
  useEffect(() => {
    const filtereddropdown = get_food_details.filter((val) => {
      return val?.timing === dropDownoption;
    });
    console.log("use effect drop");
    SetfoodDetails(filtereddropdown);
  }, [dropDownoption]);
  //radio filter
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
      console.log("use effect radio");
      SetfoodDetails(filteredradio);
    }
  }, [radioOption]);
  //intial render
  useEffect(() => {
    SetfoodDetails(get_food_details);
    console.log("use effect all");
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="carosel">
        <MainCarosel />
      </div>
      <Radio />
      <div className="card-row">
        {foodDetails.map((items) => {
          return <Cards items={items} />;
        })}
      </div>
      <Bakery />
      <Endpage />
      <Footer />
    </div>
  );
};

export default Home;
