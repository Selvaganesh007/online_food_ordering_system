import React from 'react';
import './LeftPanel.css';
import { tabList } from '../AdminPanel.constant';

const LeftPanel = ({ handleTabClick, tab_name }) => {
  return (
    <div className='leftPanel'>
      <h3>Anand Sweets</h3>
      {
        tabList.map(({ tabName, tabIcon }) => {
          return (
            <div className={tab_name === tabName ? 'clickedBtn' : 'sideBar_btn'} onClick={() => handleTabClick(tabName)} role='button' tabIndex={0}>{tabIcon} {tabName}</div>
          )
        })
      }
    </div>
  )
}

export default LeftPanel;
