import React from "react";
import "./sidebar.scss";
import Logo from "../../Assets/assets/logo.png";
import Links from "../../containers/Links/Links";

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
          <Links />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
