import React, { useState } from "react";
import "./databaseUsers.scss";
const DataBaseUsers = ({ img, title, work, followers, percent }) => {
  const [dots, setdots] = useState(false);
  return (
    <>
      <div className="database__users-container">
        <div className="users">
          <div className="dots">
            <i
              className="fa-solid fa-ellipsis"
              onClick={() => setdots((prev) => !prev)}
            ></i>
          </div>
          <img src={img} alt="user" />
          <h1>{title}</h1>
          <h3>{work}</h3>
          <hr />
          <div className="usersocial">
            <div className="followers">
              <i className="fa-solid fa-users"></i>
              <span>{followers}</span>
            </div>
            <div className="percent">
              <i className="fa-solid fa-bolt"></i>
              <span>{percent}</span>
            </div>
          </div>
          {dots && (
            <>
              <div className="dots__container">
                <ul>
                  <li>
                    <a href="#/">Approve</a>
                  </li>
                  <li>
                    <a href="#/">Reject</a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DataBaseUsers;
