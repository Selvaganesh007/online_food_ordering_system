import React from "react";
import "./CartTable.css";
export const Table = () => {
  return (
    <div>
      <table className="carttable">
        <thead>
          <tr>
            <th>Food name</th>
            <th>Quantity</th>
            <th>amount(per food)</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{items.food_name}</td>
            <td>{items.count}</td>
            <td>₹{items.price}</td>
            <td>₹{items.count * items.price}</td>
          </tr>
          <tr>
            <td colSpan={3}>total amount</td>
            <td>₹{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
