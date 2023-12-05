import React from "react";
import "../first/FirstSideBar.styles.css";
import logo from "./../../footers/FirstFooter/logo.png";

const FirstSideBar = () => {
  const navItems = ["buttons", "menus", "cards", "footers", "sidebars"];
  return (
    <aside className="sidebar">
      <div className="handle"></div>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button type="button" className="sidebar-burger">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <img
            src={logo}
            className="sidebar-logo"
            alt="logo"
            width="30px"
            height="30px"
          />
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item) => (
            <button key={item} type="button" className="sidebar-button">
              <span className="material-symbols-outlined">{item}</span>
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default FirstSideBar;
