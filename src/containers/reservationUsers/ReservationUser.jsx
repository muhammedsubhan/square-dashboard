import React from "react";
import "./reservationuser.scss";
const ReservationUser = ({
  img,
  name,
  instapage,
  resturant,
  thing,
  country,
  city,
  offer,
  payment,
  pay,
  percent,
  time,
  resTime,
  imageoffer,
}) => {
  return (
    <>
      <div className="reservation__user-container">
        <div className="reservation__user1">
          <img src={img} alt="user" />
          <div className="reservation__user-info">
            <div className="user__name">
              <h1>{name}</h1>
              <small>{instapage}</small>
            </div>
            <div className="user__place">
              <h1>{resturant}</h1>
              <small>{thing}</small>
            </div>

            <div className="user__country">
              <h1>{country}</h1>
              <small>{city}</small>
            </div>
            <div className="reservation__time">
              <img src={imageoffer} alt="offer" />
              <div className="offer__name">
                <h1>{offer}</h1>
                <small>{percent}</small>
              </div>
              <div className="reservation__timing">
                <h1>{time}</h1>
                <small>{resTime}</small>
              </div>
              <div className="reservation__payment">
                <h1>{payment}</h1>
                <small>{pay}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationUser;
