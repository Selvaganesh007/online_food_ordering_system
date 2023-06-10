import React, { useEffect, useState } from "react";
import { Cards } from "../../components/Cards/Cards";
import { useSelector } from "react-redux";
import { get_food_details } from "../../MockData/mockData";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
const Home = () => {
  const [foodDetails, SetfoodDetails] = useState([]);
  const dropDownoption = useSelector((state) => state.dropDown.value);
  const radioOption = useSelector((state) => state.radio.value);

  useEffect(() => {
    const filtereddropdown = get_food_details.filter((val) => {
      return val?.timing === dropDownoption;
    });
    console.log("use effect drop");
    SetfoodDetails(filtereddropdown);
  }, [dropDownoption]);

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

  useEffect(() => {
    SetfoodDetails(get_food_details);
    console.log("use effect all");
  }, []);

  return (
    <div>
      <Header />
      <div>
        {foodDetails.map((items) => {
          return <Cards items={items} count={0} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
