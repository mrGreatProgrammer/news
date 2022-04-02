import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav_bar">
      <nav className="nav">
        <li className="nav-li">
          <NavLink to="/" className="nav-link">
            <span className="red"></span>
            <i className="fas fa-globe"></i>
            <span className="nav-item">Discover</span>
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/popular" className="nav-link">
            <span className="red"></span>
            <i className="fas fa-fire"></i>
            <span className="nav-item">Popular</span>
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/bookmarkeds" className="nav-link">
            <span className="red"></span>
            <i className="fas fa-bookmark"></i>
            <span className="nav-item">Bookmarked</span>
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/readlater" className="nav-link">
            <span className="red"></span>
            <i className="fas fa-clock"></i>
            <span className="nav-item">Read Later</span>
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/settings" className="nav-link nav_settings">
            <span className="red"></span>
            <i className="fas fa-cog"></i>{" "}
            <span className="nav-item">Account Settings</span>
          </NavLink>
        </li>
        <li className="nav-li">
          <i className="fas fa-sign-out"></i> <span>Log out</span>
        </li>
      </nav>
    </div>
  );
};

export default NavBar;
