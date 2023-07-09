import React, { useEffect, useState } from 'react';
import './AdminPanel.css';
import RightPanel from './RightPanel/RightPanel';
import LeftPanel from './LeftPanel/LeftPanel';
import history from '../../Base/History';
import Utility from '../../Helpers/helper';

const AdminPanel = () => {
  const [tabName, setTabName] = useState('delivery');

  // useEffect(() => {
  //   const a = Utility.getUrlParams('tab');
  //   console.log(a);
  //   setTabName(Utility.getUrlParams('tab'));
  // }, [tabName]);

  const handleTabClick = (tabName) => {
    switch (tabName) {
      case 'Delivery':
        history.push('/admin-panel?tab=delivery');
        setTabName('delivery');
      break;
      case 'Product': 
        history.push('/admin-panel?tab=product');
        setTabName('product');
      break;
      case 'Dash board': 
        history.push("/admin-panel?tab=dash_board");
        setTabName('dash_board');
      break;
      case 'Settings': 
        history.push("/admin-panel?tab=settings");
        setTabName('settings');
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