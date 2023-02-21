import React, { useState } from "react";
import "./home.scss";
import Header from "../Header/Header";
import HomeData from "../../containers/home-data/HomeData";
import { data } from "../../containers/home-data/data";
import HomeContent from "../../containers/home-content/HomeContent";
const Home = () => {
  const [show, setShow] = useState(false);

  const dataContent = [
    {
      title: "Talents Subscriptions",
    },

    {
      title: "Businesses requestes",
    },

    {
      title: "Wallet",
    },
  ];
  return (
    <>
      <div className="home-container">
        <Header />
        <div className="overview-content">
          <h2>Overview</h2>

          <div className="show-month">
            <span>Show:</span>
            <h2>This month</h2>
            <i
              className="fa-solid fa-sort-down"
              onClick={() => setShow((prev) => !prev)}
            ></i>
            {show && (
              <>
                <div className="show-container">
                  <div className="title">
                    <h1>Show:</h1>
                  </div>

                  <ul className="show-ul">
                    <li>
                      <a href="#/">All</a>
                    </li>
                    <li>
                      <a href="#/">Active</a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="home__data">
          {data.map((ele, index) => {
            return (
              <HomeData key={index} i={ele.i} h1={ele.h1} span={ele.span} />
            );
          })}
        </div>
        <div className="home__content-data">
          {dataContent.map((ele, index) => {
            return (
              <>
                <div className="divv" key={index}>
                  <HomeContent title={ele.title} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
