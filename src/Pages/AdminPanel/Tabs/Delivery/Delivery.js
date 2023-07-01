import React from 'react';
import './Delivery.css';
import DeliveryCard from './DeliveryCard/DeliveryCard';

const deliveryList = [
  {
    firstName: 'Selva',
    orderPrice: '₹223',
    orderId: 12332,
    orderDate: '12/06/2023',
    orderTime: '10.45am',
    orderStatus: 'orderListed',
    address: '22, rr nagar, kovilpatti, 628501.'
  },
  {
    firstName: 'Dharun',
    orderPrice: '₹223',
    orderId: 12333,
    orderDate: '13/06/2023',
    orderTime: '09.11am',
    orderStatus: 'orderTaken',
    address: '22, rr nagar, kovilpatti, 628501.'
  },
  {
    firstName: 'Pradeep',
    orderPrice: '₹223',
    orderId: 12334,
    orderDate: '11/06/2023',
    orderTime: '2.25apm',
    orderStatus: 'orderCancelled',
    address: '22, rr nagar, kovilpatti, 628501.'
  },
  {
    firstName: 'Thazhai',
    orderPrice: '₹193',
    orderId: 12335,
    orderDate: '11/06/2023',
    orderTime: '11.15pm',
    orderStatus: 'orderNotTaken',
    address: '22, rr nagar, kovilpatti, 628501.'
  },
  {
    firstName: 'Edward',
    orderPrice: '₹393',
    orderId: 123366,
    orderDate: '11/06/2023',
    orderTime: '3.15pm',
    orderStatus: 'orderCompleted',
    address: '22, rr nagar, kovilpatti, 628501.'
  }
];

const Delivery = () => {
  return (
    <div className='delivery'>
      <div className='delivery_header'>
        <h4>Delivery</h4>
      </div>
      <div className='delivery_body'>
        {
          deliveryList.map(val => {
            return <DeliveryCard orderDetail={val} />
          })
        }
      </div>
    </div>
  )
}

export default Delivery;
