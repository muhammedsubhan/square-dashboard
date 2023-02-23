import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./link.scss";

import profile from "../../Assets/assets/profile.png";

const Links = () => {
  const [profileToggle, setProfileToggle] = useState(false);
  return (
    <>
      <div className="links-container">
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

      <div className="profile">
        <img
          src={profile}
          alt="profile"
          onClick={() => setProfileToggle((prev) => !prev)}
        />
        <div className="L">
          <a href="#/" onClick={() => setProfileToggle((prev) => !prev)}>
            <h2>My Profile</h2>
            <i
              className="fa-solid fa-angle-right"
              onClick={() => setProfileToggle((prev) => !prev)}
            ></i>
          </a>
        </div>

        {profileToggle && (
          <>
            <div
              className={
                profileToggle ? "profile-links active" : "profile-links"
              }
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
  );
};

export default Links;
