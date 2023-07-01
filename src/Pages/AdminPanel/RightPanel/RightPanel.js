import React, { useEffect, useState } from 'react'
import './RightPanel.css';
import Products from '../Tabs/Products/Products';
import DashBoard from '../Tabs/DashBoard/DashBoard';
import Settings from '../Tabs/Settings/Settings';
import Delivery from '../Tabs/Delivery/Delivery';

const RightPanel = ({ tabName }) => {
  const renderComponent = () => {
    switch (tabName) {
      case 'Delivery': return <Delivery />
      case 'Product': return <Products />
      case 'Dash Board': return <DashBoard />
      case 'Settings': return <Settings />
      default:
    }
  }

  return (
    <div className='rightPanel'>
      {renderComponent()}
    </div>
  )
}

export default RightPanel