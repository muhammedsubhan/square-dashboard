import React, { useState } from "react";
import "./database.scss";
import Header from "../Header/Header";
const DataBase = () => {
  const [pendingToggle, setPendingToggle] = useState(false);
  const [sortByToggle, setSortByToggle] = useState(false);
  return (
    <>
      <div className="database__container">
        <Header />

        <div className="database__heading">
          <div className="heading">
            <h1>Results(450)</h1>
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
            <h1>content A</h1>
          </div>

          <div className="contentB">
            <h1>content B</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataBase;
