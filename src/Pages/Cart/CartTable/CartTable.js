import React from "react";
import "./CartTable.css";

const CardTable = ({ cards }) => {
  const total = cards.reduce(
    (total, items) => total + items.count * items.price,
    0
  );
  return (
    <div className="carttable-container">
      <h4 className="cart-header">Cart Details</h4>
      <table className="carttable">
        <thead>
          <tr className="cart-row">
            <th className="cart-head">Food name</th>
            <th className="cart-head">Quantity</th>
            <th className="cart-head">amount (per food)</th>
            <th className="cart-head">amount</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((items) => {
            return (
              <>
                <tr className="cart-row">
                  <td className="cart-data">{items.food_name}</td>
                  <td className="cart-data">{items.count}</td>
                  <td className="cart-data">₹{items.price}</td>
                  <td className="cart-data">₹{items.count * items.price}</td>
                </tr>
              </>
            );
          })}
          <tr className="cart-row">
            <td colSpan={3} className="cart-total ">
              Total
            </td>
            <td className="cart-total">₹{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CardTable;
