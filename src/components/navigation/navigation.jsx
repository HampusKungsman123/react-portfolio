import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
