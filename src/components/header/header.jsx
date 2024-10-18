import React from "react";
import "./header.css";
import Navigation from "../navigation/navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="headerWrapper">
        <img src="assets/IMG_0088.jpeg" alt="Profilbild" />
        <Navigation />
      </div>
    </header>
  );
};
export default Header;
