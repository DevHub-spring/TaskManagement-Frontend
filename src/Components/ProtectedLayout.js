import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBarPage from './Pages/SideBar/SideBarPage';

const ProtectedLayout = ({ onLogout }) => {
  return (
    <div className="layout">
      <SideBarPage onLogout={onLogout} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedLayout;