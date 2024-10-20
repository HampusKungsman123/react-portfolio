import React from "react";
import "./header.css";
import Navigation from "../navigation/navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="headerWrapper">
        
        <Navigation />
      </div>
    </header>
  );
};
export default Header;
