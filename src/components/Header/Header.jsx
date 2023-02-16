import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="bars">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="heading">
          <h1>Welcome Luca,</h1>
          <span>Monday, September 20th 2023</span>
        </div>
        <div className="header-links">
          <i className="fa-sharp fa-solid fa-comment-dots"></i>
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-window-restore"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
