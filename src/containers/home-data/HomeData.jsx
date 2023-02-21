import React from "react";
import "./homeData.scss";
const HomeData = ({ i, h1, span }) => {
  // const data = [
  //   {
  //     i: "fa-solid fa-user-group",
  //     h1: "1.256",
  //     span: "Talents",
  //   },

  //   {
  //     i: "fa-solid fa-tag",
  //     h1: "1.256",
  //     span: "Brands",
  //   },

  //   {
  //     i: "fa-solid fa-shop",
  //     h1: "100",
  //     span: "Local Businesses",
  //   },

  //   {
  //     i: "fa-solid fa-building",
  //     h1: "30",
  //     span: "Agencies",
  //   },

  //   {
  //     i: "fa-solid fa-star",
  //     h1: "1.256",
  //     span: "Talents Agencies",
  //   },

  //   {
  //     i: "fa-sharp fa-solid fa-bell-concierge",
  //     h1: "1.256",
  //     span: "Reservations",
  //   },

  //   {
  //     i: "fa-solid fa-bolt",
  //     h1: "1.256",
  //     span: "Actions",
  //   },

  //   {
  //     i: "fa-solid fa-camera-retro",
  //     h1: "500",
  //     span: "Events",
  //   },

  //   {
  //     i: "fa-solid fa-briefcase",
  //     h1: "1.200",
  //     span: "Jobs",
  //   },

  //   {
  //     i: "fa-solid fa-image",
  //     h1: "10.200",
  //     span: "Meida Contents",
  //   },
  // ];
  return (
    <>
      <div className="home__data-container">
        <div className="logo__tag">
          <i className={i}></i>
        </div>

        <div className="title">
          <h1>{h1}</h1>
          <span>{span}</span>
        </div>
      </div>
    </>
  );
};

export default HomeData;
