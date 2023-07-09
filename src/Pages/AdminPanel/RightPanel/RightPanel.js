import React, { useEffect, useState } from 'react'
import './RightPanel.css';
import Products from '../Tabs/Products/Products';
import DashBoard from '../Tabs/DashBoard/DashBoard';
import Settings from '../Tabs/Settings/Settings';
import Delivery from '../Tabs/Delivery/Delivery';

const RightPanel = ({ tabName }) => {
  const renderComponent = () => {
    switch (tabName) {
      case 'delivery': return <Delivery />
      case 'product': return <Products />
      case 'dash_board': return <DashBoard />
      case 'settings': return <Settings />
      default:
    }
  }

  return (
    <div className='rightPanel'>
      {renderComponent()}
    </div>
  )
}

export default RightPanel;
