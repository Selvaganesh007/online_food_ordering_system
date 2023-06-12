import React from "react";
import "./CartTable.css";

const CardTable = ({ cards }) => {
  const total = cards.reduce(
    (total, items) => total + items.count * items.price,
    0
  );
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
          {cards.map((items) => {
            return (
              <>
                <tr>
                  <td>{items.food_name}</td>
                  <td>{items.count}</td>
                  <td>₹{items.price}</td>
                  <td>₹{items.count * items.price}</td>
                </tr>
              </>
            );
          })}
          <tr>
            <td colSpan={3}>total amount</td>
            <td>₹{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CardTable;
