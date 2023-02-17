import React, { useState } from "react";
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
        <img
          src={profile}
          alt="profile"
          onClick={() => setProfileToggle((prev) => !prev)}
        />
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
            className={profileToggle ? "profile-links active" : "profile-links"}
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
    </>
  );
};

export default Links;
