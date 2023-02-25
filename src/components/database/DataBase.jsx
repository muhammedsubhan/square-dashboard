import React, { useState } from "react";
import "./database.scss";
import Header from "../Header/Header";
import DataBaseUsers from "../../containers/DataBase-Users/DataBaseUsers";
import {
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
} from "../../containers/DataBase-Users/userImages";
const DataBase = () => {
  const [pendingToggle, setPendingToggle] = useState(false);
  const [sortByToggle, setSortByToggle] = useState(false);
  const Users = [
    {
      id: 1,
      img: user1,
      title: "Angeline Potter",
      work: "Mexico・Blogger",
      followers: "24k",
      percent: "3.42%",
    },

    {
      id: 2,
      img: user2,
      title: "Cameron Williamson",
      work: "Colombia・Blogger",
      followers: "45k",
      percent: "3.2%",
    },

    {
      id: 3,
      img: user3,
      title: "Arlene Steward",
      work: "United States・Blogger",
      followers: "30k",
      percent: "3.4%",
    },

    {
      id: 4,
      img: user4,
      title: "Marlon Berg",
      work: "England・Blogger",
      followers: "18k",
      percent: "3.75%",
    },

    {
      id: 5,
      img: user5,
      title: "Jenny",
      work: "France・Blogger",
      followers: "55k",
      percent: "3.12%",
    },

    {
      id: 6,
      img: user6,
      title: "Kathryn",
      work: "Germany・Blogger",
      followers: "75k",
      percent: "3.45%",
    },

    {
      id: 7,
      img: user7,
      title: "Andrew",
      work: "Poland・Blogger",
      followers: "62k",
      percent: "3.7%",
    },
  ];

  return (
    <>
      <div className="database__container">
        <Header />

        <div className="database__heading">
          <div className="heading">
            <h1>Results ({Users.length})</h1>
          </div>

          <div className="pending__sorting">
            <div className="pending">
              <span>Show: </span>
              <h2> Pending</h2>
              <i
                className="fa-solid fa-sort-down"
                onClick={() => setPendingToggle((prev) => !prev)}
              ></i>
              <div className="pending__toggle">
                {pendingToggle && (
                  <>
                    <div className="pending-container">
                      <div className="title">
                        <h3>Show:</h3>
                      </div>

                      <ul className="pending-ul">
                        <li>
                          <a href="#/">Pending</a>
                        </li>
                        <li>
                          <a href="#/">approved</a>
                        </li>
                        <li>
                          <a href="#/">rejected</a>
                        </li>
                        <li>
                          <a href="#/">blocked</a>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="sorting">
              <span>Sort by:</span>
              <h2>A - Z</h2>
              <i
                className="fa-solid fa-sort-down"
                onClick={() => setSortByToggle((prev) => !prev)}
              ></i>
              {sortByToggle && (
                <>
                  <div className="sorting-container">
                    <div className="title">
                      <h3>Sort by:</h3>
                    </div>

                    <ul className="sorting-ul">
                      <li>
                        <a href="#/">A-Z</a>
                      </li>
                      <li>
                        <a href="#/">Latest</a>
                      </li>
                      <li>
                        <a href="#/">Oldest</a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="database__content">
          <div className="contentA">
            {Users.map((ele) => {
              return (
                <DataBaseUsers
                  key={ele.id}
                  img={ele.img}
                  title={ele.title}
                  work={ele.work}
                  followers={ele.followers}
                  percent={ele.percent}
                />
              );
            })}
          </div>

          <div className="contentB">
            <div className="filters">
              <div className="filter__title">
                <h1>Filters</h1>
              </div>
              <div className="filter__input">
                <input type="text" placeholder="Search" />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              <div className="filter__social">
                <div className="general">
                  <h1>General</h1>
                </div>
                <div className="business">
                  <h1>Business</h1>
                </div>
                <div className="social">
                  <h1>Social</h1>
                </div>
              </div>

              <div className="filter__talent-rate">
                <h1>Talent rate</h1>
                <input type="range" />
                <div className="talent__rate">
                  <div className="talent_score">
                    <h1>3.0</h1>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="talent_score1">
                    <h1>5.0</h1>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <div className="nationality">
              <div className="nationality__title">
                <h1>Nationality</h1>
              </div>
              <div className="nationality__input">
                <input type="text" placeholder="Search" />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              <div className="nationality__checks">
                <div className="us">
                  <input type="checkbox" />
                  <span>United States (40)</span>
                </div>

                <div className="italy">
                  <input type="checkbox" />
                  <span>Italy (465)</span>
                </div>
                <div className="russia">
                  <input type="checkbox" />
                  <span>Russia (340)</span>
                </div>
              </div>
              <hr />
            </div>

            <div className="age">
              <h1>Age</h1>
              <input type="range" />

              <div className="number">
                <div className="N25">
                  <h1>25</h1>
                </div>
                <div className="N90">
                  <h1>90</h1>
                </div>
              </div>
              <hr />
            </div>

            <div className="gender">
              <h1>Gender</h1>
              <div className="female">
                <input type="checkbox" />
                <span>Female (354)</span>
              </div>
              <div className="male">
                <input type="checkbox" />
                <span>Male (336)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataBase;
