import React from "react";
import "./homeContentSocials.scss";

const HomeContentSocials = ({ h2, small, img }) => {
  return (
    <>
      <div className="home__social-links">
        <div className="social__container">
          <img src={img} alt="img" />
          <div className="social__name">
            <h1>{h2}</h1>
            <small>{small}</small>
          </div>
          <div className="social__request">
            <i className="fa-solid fa-x"></i>
            <i className="fa-solid fa-check"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContentSocials;
