import React from "react";
import "./sidebar.scss";
import Logo from "../../Assets/assets/logo.png";
import profile from "../../Assets/assets/profile.png";

const Sidebar = () => {
  return (
    <>
      <aside>
        <div className="aside-bar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <h1>SQUARE</h1>
          </div>
          <div className="admin-panel">
            <small>admin panel</small>
          </div>

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
                  <i class="fa-solid fa-receipt"></i>
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
              <i class="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
