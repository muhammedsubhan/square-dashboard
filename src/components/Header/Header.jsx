import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import profile from "../../Assets/assets/profile.png";
const Header = () => {
  const [togglebtn, setToggleBtn] = useState(false);
  const [toggleHeader, setToggleHeader] = useState(false);
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
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <div className="font-awe-icon">
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <Link to="/database">Database</Link>
                  </li>
                  <li>
                    <div className="font-awe-icon">
                      <i className="fa-sharp fa-solid fa-bell-concierge"></i>
                    </div>
                    <Link to="/reservation">Reservations</Link>
                  </li>
                  <li>
                    <div className="font-awe-icon">
                      <i className="fa-solid fa-calendar"></i>
                    </div>
                    <Link to="/project">Projects</Link>
                  </li>

                  <li>
                    <div className="font-awe-icon">
                      <i className="fa-solid fa-receipt"></i>
                    </div>
                    <Link to="/accounting">Accounting</Link>
                  </li>
                  <li>
                    <div className="font-awe-icon">
                      <i className="fa-solid fa-chart-pie"></i>
                    </div>
                    <Link to="/stats">Stats</Link>
                  </li>
                </ul>
              </div>

              <div className="my-profile">
                <img
                  src={profile}
                  alt="profile"
                  onClick={() => setToggleHeader((prev) => !prev)}
                />
                <a href="#/" onClick={() => setToggleHeader((prev) => !prev)}>
                  <h2>My Profile</h2>
                  <i
                    className="fa-solid fa-angle-right"
                    onClick={() => setToggleHeader((prev) => !prev)}
                  ></i>
                </a>
              </div>

              {toggleHeader && (
                <>
                  <div
                    className={toggleHeader ? "myprofile active" : "myprofile"}
                  >
                    <a href="#/">
                      <i className="fa-solid fa-user-large"></i>
                      Edit Profile
                    </a>

                    <a href="#/">
                      <i className="fa-solid fa-gear"></i>
                      Settings
                    </a>

                    <a href="#/">
                      <i className="fa-solid fa-right-from-bracket"></i>
                      Log out
                    </a>
                  </div>
                </>
              )}
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
