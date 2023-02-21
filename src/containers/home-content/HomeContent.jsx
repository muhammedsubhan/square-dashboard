import React from "react";
import HomeContentSocials from "../home-social/HomeContentSocials";
import "./homecontent.scss";
import { socialData } from "../home-social/socialData";
const HomeContent = ({ title }) => {
  return (
    <>
      <div className="home__content-container">
        <div className="home__content">
          <div className="home__content-title">
            <h1>{title}</h1>
            <span>See all</span>
          </div>

          <div className="home__content-social">
            {socialData.map((ele, index) => {
              return (
                <div className="div" key={index}>
                  <HomeContentSocials
                    img={ele.img}
                    h2={ele.h2}
                    small={ele.small}
                    followers={ele.followers}
                    percent={ele.percent}
                    cross={ele.cross}
                    tick= {ele.tick}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
