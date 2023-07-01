import React, { useState } from 'react';
import './AdminPanel.css';
import RightPanel from './RightPanel/RightPanel';
import LeftPanel from './LeftPanel/LeftPanel';
import history from '../../Base/History';

const AdminPanel = () => {
  const [tabName, setTabName] = useState('Delivery');

  const handleTabClick = (tabName) => {
    switch (tabName) {
      case 'Delivery':
        history.push('/admin-panel?tab=delivery');
        setTabName('Delivery');
      break;
      case 'Product': 
        history.push('/admin-panel?tab=product');
        setTabName('Product');
      break;
      case 'Dash board': 
        history.push("/admin-panel?dash_board");
        setTabName('Dash Board');
      break;
      case 'Settings': 
        history.push("/admin-panel?settings");
        setTabName('Settings');
      break;
      default:
    }
  };

  return (
    <div className='adminPanel'>
      <LeftPanel handleTabClick={handleTabClick} tab_name={tabName} />
      <RightPanel tabName={tabName} />
    </div>
  )
}

export default AdminPanel;