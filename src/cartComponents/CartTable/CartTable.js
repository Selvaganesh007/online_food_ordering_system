import React from "react";
import "./CartTable.css";
import { useSelector } from "react-redux";
const CardTable = () => {
  const rupees = "₹";
  const addCartDetails = useSelector((state) => state.addCart.value);
  return (
    <div>
      <table className="carttable">
        <tr>
          <th>Food name</th>
          <th>Quantity</th>
          <th>amount(per food)</th>
          <th>amount</th>
        </tr>
        <tr>
          <td>{addCartDetails.food_name}</td>
          <td>{addCartDetails.count}</td>
          <td>
            {rupees}
            {addCartDetails.price}
          </td>
          <td>
            {rupees}
            {addCartDetails
              ? addCartDetails.count * addCartDetails.price
              : null}
          </td>
        </tr>
        <tr>
          <td colSpan={3}>total amount</td>
          <td>{0}</td>
        </tr>
      </table>
    </div>
  );
};
export default CardTable;
