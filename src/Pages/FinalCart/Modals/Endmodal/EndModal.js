import React from "react";
import "./EndModal.css";
import { Button, Modal } from "antd";
import { useState } from "react";

const EndModal = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <button className="End-btn" onClick={() => showModal()}>
        End Cart
      </button>
      <Modal
        title="End Cart"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Do you want to complete the purchase</p>
      </Modal>
    </>
  );
};
export default EndModal;
