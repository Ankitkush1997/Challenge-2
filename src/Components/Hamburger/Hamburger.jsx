import React from "react";
import "./Hamburger.css";
import { Link } from "react-router-dom";
const Hamburger = () => {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/admin">
            <li>Admin</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;
