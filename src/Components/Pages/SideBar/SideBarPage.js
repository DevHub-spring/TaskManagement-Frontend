import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SideBarPage.css';
import "remixicon/fonts/remixicon.css";

const SideBarPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: "ri-dashboard-3-line", name: "Home", path: "/dashboard" },
    { icon: "ri-rocket-line", name: "All Tasks", path: "/kanban" },
    { icon: "ri-account-box-line", name: "Account", path: "/profile" },
  ];

  const allowedPaths = ['/dashboard', '/kanban', '/profile'];

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
      <button className="toggle-button" onClick={toggleSidebar}>{isSidebarOpen ? '✖' : '☰'}</button>
      <div className={`nav ${isSidebarOpen ? 'nav--open' : 'nav--closed'}`}>
        <ul className="nav__list">
          {menuItems.map((item, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              key={index}
              className={`nav__link ${activeIndex === index ? "active-link" : ""}`}
              onClick={() => {
                setActiveIndex(index);
                navigate(item.path);
              }}
            >
              <i className={item.icon}></i>
              <span className="nav__name">{item.name}</span>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBarPage;