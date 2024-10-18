import React from "react";
import "./navigation.css";
import { IoHome } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <IoHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaCircleInfo />
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <IoChatboxEllipses />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
