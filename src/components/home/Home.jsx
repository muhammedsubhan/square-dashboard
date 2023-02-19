import React, { useState } from "react";
import "./home.scss";
import Header from "../Header/Header";
import HomeData from "../../containers/home-data/HomeData";
const Home = () => {
  const [show, setShow] = useState(false);
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
        <HomeData />
      </div>
    </>
  );
};

export default Home;
