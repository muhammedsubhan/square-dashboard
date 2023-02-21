import React, { useState } from "react";
import "./home.scss";
import Header from "../Header/Header";
import HomeData from "../../containers/home-data/HomeData";
import { data } from "../../containers/home-data/data";
import HomeContent from "../../containers/home-content/HomeContent";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
} from "../../containers/home-social/images";

const Home = () => {
  const [show, setShow] = useState(false);

  const Talents = [
    {
      img: image1,
      h2: "Eleanor Mccoy",
      small: "Los Angeles・Blogger",
      cross: "fa-solid fa-x",
      tick: "fa-solid fa-check",
    },
    {
      img: image2,
      h2: "Samantha Ferguson",
      small: "Panama City・Influencer",
      followers: "20K",
      percent: "1.2%",
    },
    {
      img: image3,
      h2: "Martina Villanova",
      small: "Padova・Dancer",
      followers: "105K",
      percent: "3.5%",
    },
    {
      img: image4,
      h2: "Eric Pritz",
      small: "Amsterdam・Dj",
      followers: "255K",
      percent: "2.2%",
    },
    {
      img: image5,
      h2: "Vladimir Tarasova",
      small: "Moscow・Photographer",
      followers: "10K",
      percent: "1.2%",
    },
  ];

  const Businesses = [
    {
      img: image6,
      h2: "La Cantinetta",
      small: "Local business・Restaurant",
      country: "Milano",
      city: "Italy",
    },
    {
      img: image7,
      h2: "Gucci",
      small: "Brand・Clothing",
      country: "Milano",
      city: "Italy",
    },
    {
      img: image8,
      h2: "Brand name",
      small: "Typology",
      country: "Location",
      city: "Country",
    },
    {
      img: image9,
      h2: "Agency name",
      small: "Typology",
      country: "Location",
      city: "Country",
    },
    {
      img: image10,
      h2: "Talent ageny name",
      small: "Typology",
      country: "Milano",
      city: "Italy",
    },
  ];

  const Wallet = [
    {
      img: image9,
      h2: "Spring summer ",
      small: "Prada Group S.p.A.",
      profit: "+ €500,00",
    },
    {
      img: image2,
      h2: "Emily Harrys",
      small: "Los Angeles・Blogger",
      profit: "- $300,00",
    },
    {
      img: image9,
      h2: "Spring summer",
      small: "Prada Group S.p.A.",
      profit: "+ €150,00",
    },
    {
      img: image9,
      h2: "Spring summer ",
      small: "Prada Group S.p.A.",
      profit: "+ €100,00",
    },
    {
      img: image5,
      h2: "Spring summer ",
      small: "Prada Group S.p.A.",
      profit: "+ € 1.000,00",
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
          <HomeContent
            title={"Talents subscriptions"}
            suhan={Talents}
            True={true}
          />
          <HomeContent title={"Businesses requests"} suhan={Businesses} />
          <HomeContent title={"Wallet"} suhan={Wallet} />
        </div>
      </div>
    </>
  );
};

export default Home;
