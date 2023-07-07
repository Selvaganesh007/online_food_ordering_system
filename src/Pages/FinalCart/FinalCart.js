import React from "react";
import FinalCartTable from "./FinalCartTable/FinalCartTable";
import "./FinalCart.css";
import { useSelector } from "react-redux";
import BackModal from "./Modals/Backmodal/BackModal";
import EndModal from "./Modals/Endmodal/EndModal";

const FinalCart = () => {
  const cards = useSelector((state) => state.homeSlice.addCart);
  const total = cards.reduce(
    (total, items) => total + items.count * items.price,
    0
  );
  return (
    <div>
      <div className="table-flex">
        <div className="finalcart-table">
          <FinalCartTable />
        </div>
        <div className="finalcart-amount">
          <h3>Total Amount:</h3>
          <p>₹{total}</p>
        </div>
      </div>
      <div className="btns">
        <BackModal />
        <EndModal />
      </div>
    </div>
  );
};
export default FinalCart;
