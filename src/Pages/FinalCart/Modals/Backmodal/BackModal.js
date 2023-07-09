import React from "react";
import { Button, Modal } from "antd";
import { useState } from "react";
import "./BackModal.css";
import { useNavigate } from "react-router-dom";
const BackModal = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    navigate("/add-cart");
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <button className="Back-btn" onClick={() => showModal()}>
        Go Back
      </button>
      <Modal
        title="Back to cart"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Go Back to cart</p>
      </Modal>
    </>
  );
};
export default BackModal;
