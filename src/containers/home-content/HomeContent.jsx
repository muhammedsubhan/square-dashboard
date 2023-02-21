import React from "react";
import HomeContentSocials from "../home-social/HomeContentSocials";
import "./homecontent.scss";
const HomeContent = (props) => {
  return (
    <>
      <div className="home__content-container">
        <div className="home__content">
          <div className="home__content-title">
            <h1>{props.title}</h1>
            <span>See all</span>
          </div>

          <div className="home__content-social">
            {props.suhan.map((ele, index) => {
              return (
                <div className="div" key={index}>
                  <HomeContentSocials
                    img={ele.img}
                    h2={ele.h2}
                    small={ele.small}
                    cross={ele.cross}
                    tick={ele.tick}
                    index={index}
                    followers={ele.followers}
                    percent={ele.percent}
                    country={ele.country}
                    city={ele.city}
                    profit={ele.profit}
                    True={props.True}
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
