import React from "react";
import "./FinalCartTable.css";
import { useSelector } from "react-redux";

const FinalCartTable = () => {
  const cards = useSelector((state) => state.homeSlice.addCart);
  const total = cards.reduce(
    (total, items) => total + items.count * items.price,
    0
  );
  return (
    <div className="finalcarttable-container finaltable-container">
      <h4 className="finalcart-header">Your Cart</h4>
      <div className="finaltable-wrapper">
        <table className="finalcarttable">
          <thead className="finaltable-head">
            <tr className="finalcart-row">
              <th className="finalcart-head">Food name</th>
              <th className="finalcart-head">Quantity</th>
              <th className="finalcart-head">amount (per food)</th>
              <th className="finalcart-head">amount</th>
            </tr>
          </thead>
          <tbody className="finalcart-body">
            {cards.map((items) => {
              return (
                <>
                  <tr className="finalcart-row finalcart-scroll">
                    <td className="finalcart-data">{items.food_name}</td>
                    <td className="finalcart-data">{items.count}</td>
                    <td className="finalcart-data">₹{items.price}</td>
                    <td className="finalcart-data">
                      ₹{items.count * items.price}
                    </td>
                  </tr>
                </>
              );
            })}
            <tfoot className="finaltable-footer">
              <tr className="finalcart-row finaltotal-row">
                <td colSpan={3} className="finalcart-total ">
                  Total
                </td>
                <td className="finalcart-total">₹{total}</td>
              </tr>
            </tfoot>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinalCartTable;
