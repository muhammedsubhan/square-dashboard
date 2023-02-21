import React from "react";
import "./homeContentSocials.scss";

const HomeContentSocials = ({
  h2,
  small,
  img,
  index,
  followers,
  percent,
  country,
  city,
  profit,
  tick,
  cross,
  True,
}) => {
  console.log(True);
  return (
    <>
      <div className="home__social-links">
        <div className="social__container">
          <img src={img} alt="img" />
          <div className="social__name">
            <h1>{h2}</h1>
            <small>{small}</small>
          </div>
          {index === 0 &&
            (True === true ? (
              <div className="social__request">
                <i className={cross}></i>
                <i className={tick}></i>
              </div>
            ) : null)}
          <div className="followers">
            <h1>{followers}</h1>
            <small>{percent}</small>
          </div>

          <div className="location">
            <h1>{country}</h1>
            <small>{city}</small>
          </div>

          <div className="profit">
            <h2>{profit}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContentSocials;
