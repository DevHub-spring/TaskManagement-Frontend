import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SideBarPage.css';
import "remixicon/fonts/remixicon.css";

const SideBarPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  const menuItems = [
    { icon: "ri-dashboard-3-line", name: "Home", path: "/" },
    { icon: "ri-rocket-line", name: "Kanban", path: "/kanban" },
    { icon: "ri-account-box-line", name: "Profile", path: "/profile" },
  ];

  const allowedPaths = ['/', '/kanban', '/profile'];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSidebarOpen(false);
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  if (!allowedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>☰</button>
      <div className={`nav ${isSidebarOpen ? 'nav--open' : 'nav--closed'}`}>
        <ul className="nav__list">
          {menuItems.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className={`nav__link ${activeIndex === index ? "active-link" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <i className={item.icon}></i>
              <span className="nav__name">{item.name}</span>
            </a>
          ))}
        </ul>
        <div className="nav__circle-1"></div>
        <div className="nav__circle-2"></div>
        <div className="nav__square-1"></div>
        <div className="nav__square-2"></div>
      </div>
    </>
  );
};

export default SideBarPage;