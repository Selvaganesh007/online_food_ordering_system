import { food_timing_category } from "../../MockData/mockData.js";
import { useDispatch } from "react-redux";
import { OptionValue } from "../../features/Dropdownprop.js";

export const Dropdown = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ margin: "30px" }}>
      <select
        onChange={(e) => {
          dispatch(OptionValue(e.target.value));
        }}
      >
        {food_timing_category.map((item, index) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
