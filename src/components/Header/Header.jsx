import React, { useState } from "react";
import "./header.scss";
import profile from "../../Assets/assets/profile.png";
const Header = () => {
  const [togglebtn, setToggleBtn] = useState(false);

  return (
    <>
      <div className="header">
        <div className="bars" onClick={() => setToggleBtn(true)}>
          <i className="fa-solid fa-bars"></i>
        </div>

        {togglebtn && (
          <>
            <div className={togglebtn ? "Sidebar-container active" : null}>
              <div className="xmark" onClick={() => setToggleBtn(false)}>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="sidebar-links">
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

              <div className="my-profile">
                <img src={profile} alt="profile" />
                <a href="#/">
                  <h2>My Profile</h2>
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
          </>
        )}
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
