import React, { useState } from 'react';
import '../Delivery.css';
import { Button, Modal } from 'antd';
import { FiShieldOff } from 'react-icons/fi';
import { PiAirplaneTakeoffBold, PiClipboardTextBold } from 'react-icons/pi';
import { LuCandyOff } from 'react-icons/lu';
import { FcUndo, FcInfo } from 'react-icons/fc';
import { MdOutlineDoneAll } from 'react-icons/md';
import Utility from '../../../../../Helpers/helper';

const DeliveryCard = ({ orderDetail }) => {
  const { orderStatus, firstName, orderPrice, orderDate, orderTime, address, orderId } = orderDetail || [];

  const [orderStatusLocal, setOrderStatusLocal] = useState(orderStatus);
  const [showFullDetail, setShowFullDetail] = useState(false);

  const renderOrderStatus = (order_status) => {
    switch (order_status) {
      case 'orderListed': return <div className='deliveryCard_Columns' style={{ color: 'gray' }}><PiClipboardTextBold /> {Utility.transformToWord(order_status)}</div>;
      case 'orderTaken': return <div className='deliveryCard_Columns' style={{ color: 'green' }}><PiAirplaneTakeoffBold /> {Utility.transformToWord(order_status)}</div>;
      case 'orderCancelled': return <div className='deliveryCard_Columns' style={{ color: 'red' }}><LuCandyOff /> {Utility.transformToWord(order_status)}</div>;
      case 'orderNotTaken': return <div className='deliveryCard_Columns' style={{ color: 'brown' }}><FiShieldOff /> {Utility.transformToWord(order_status)}</div>;
      case 'orderCompleted': return <div className='deliveryCard_Columns' style={{ color: 'green' }}><MdOutlineDoneAll /> {Utility.transformToWord(order_status)}</div>;
      default:
    }
  };

  return (
    <div className='deliveryCard'>
      <div className='deliveryCard_Columns'>{firstName}'s order</div>
      <div className='deliveryCard_Columns'>{orderPrice}</div>
      <div className='deliveryCard_Columns'>{orderDate}</div>
      <div className='deliveryCard_Buttons'>
        <Button type='primary' onClick={() => setOrderStatusLocal('orderTaken')}>Order Taken</Button>
        <Button danger onClick={() => setOrderStatusLocal('orderNotTaken')}>Order Not Taken</Button>
        <FcUndo className='deliveryCard_Icons' onClick={() => setOrderStatusLocal(orderStatus)} />
      </div>
      {renderOrderStatus(orderStatusLocal)}
      <FcInfo className='deliveryCard_Icons' onClick={() => setShowFullDetail(true)} />
      <Modal
        title="Order Information"
        open={showFullDetail}
        onCancel={() => setShowFullDetail(false)}
        footer={null}
      >
        <div>
          <div>Order time: {orderTime}</div>
          <div>Address: {address}</div>
          <div>Order id: {orderId}</div>
        </div>
      </Modal>
    </div>
  )
}

export default DeliveryCard;
