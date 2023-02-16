import React from "react";
import "./link.scss";
import profile from "../../Assets/assets/profile.png";
const Links = () => {
  return (
    <>
      <div className="links-container">
        <ul>
          <li>
            <div className="font-awe-icon">
              <i className="fa-solid fa-house"></i>
            </div>
            <a href="#/">Home</a>
          </li>
          <li>
            <div className="font-awe-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <a href="#/">Database</a>
          </li>
          <li>
            <div className="font-awe-icon">
              <i className="fa-sharp fa-solid fa-bell-concierge"></i>
            </div>
            <a href="#/">Reservations</a>
          </li>
          <li>
            <div className="font-awe-icon">
              <i className="fa-solid fa-calendar"></i>
            </div>
            <a href="#/">Projects</a>
          </li>

          <li>
            <div className="font-awe-icon">
              <i className="fa-solid fa-receipt"></i>
            </div>
            <a href="#/">Accounting</a>
          </li>
          <li>
            <div className="font-awe-icon">
              <i className="fa-solid fa-chart-pie"></i>
            </div>
            <a href="#/">Stats</a>
          </li>
        </ul>
      </div>

      <div className="profile">
        <img src={profile} alt="profile" />
        <a href="#/">
          <h2>My Profile</h2>
          <i className="fa-solid fa-angle-right"></i>
        </a>
      </div>
    </>
  );
};

export default Links;
