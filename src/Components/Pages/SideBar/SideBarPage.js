import React from 'react'
import {useState} from 'react';
import './SideBarPage.css';
import "remixicon/fonts/remixicon.css";


const SideBarPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line no-sparse-arrays
  const menuItems=[
    { icon: "ri-dashboard-3-line", name: "Home",path: "/" },
    { icon: "ri-rocket-line", name: "AllTasks",path: "/kanban" },
    { icon: "ri-account-box-line", name: "Account" },
  ];
  return (
    <nav className="nav">
      <ul className="nav__list">
      {menuItems.map((item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            href="#"
            key={index}
            className={`nav__link ${activeIndex === index ? "active-link" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <i className={item.icon}></i>
            <span className="nav__name">{item.name}</span>
          </a>
        ))}
      </ul>
      {/* Shapes */}
      <div className="nav__circle-1"></div>
      <div className="nav__circle-2"></div>
      <div className="nav__square-1"></div>
      <div className="nav__square-2"></div>
    </nav>
  )
}
export default SideBarPage;