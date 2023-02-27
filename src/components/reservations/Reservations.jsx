import React from "react";
import "./reservation.scss";
import Header from "../Header/Header";
import { image1, image2, user1, user2 } from "../reservations/import.js";
import ReservationUser from "../../containers/reservationUsers/ReservationUser";

const reservation = [
  {
    img: image1,
    name: "Arlene Henry",
    instapage: "@instapage",
    resturantL: "La Perla d'Oro",
    thing: "Restaurent",
    country: "Milan",
    city: "Italy",
    offer: "offer name",
    percent: "10% off",
    time: "5:00 - 6:00 pm",
    resTime: "Rerservation time",
    payment: "7,00 €",
    pay: "Paid",
    imageoffer: user1,
  },

  {
    img: image2,
    name: "Arlene Steward",
    instapage: "@instapage",
    resturantL: "La Perla d'Oro",
    thing: "Restaurent",
    country: "Los Angeles",
    city: "USA",
    offer: "offer name",
    percent: "Complimentary",
    time: "5:00 - 6:00 pm",
    resTime: "Rerservation time",
    payment: "-",
    pay: "Paid",
    imageoffer: user2,
  },
];
const Reservations = () => {
  return (
    <>
      <div className="reservation__container">
        <Header />
        <div className="reservation__header">
          <div className="reservation__year">
            <h1>February, 2019</h1>
            <div className="reservation__days">
              <span>Tue, 11</span>
              <span>Wed, 12</span>
              <span>Thu, 13</span>
              <span>Fri, 14</span>
              <span>Sat, 15</span>
              <span>Sun, 16</span>
              <span>Mon, 17</span>
              <span>Tue, 18</span>
              <span>Wed, 19</span>
              <span>Thu, 20</span>
              <span>Fri, 21</span>
            </div>
          </div>
        </div>

        <div className="reservation__main-content">
          <div className="reservation__contentA">
            <div className="reservations__results">
              <h1>Results (120)</h1>
            </div>

            {reservation.map((ele, index) => {
              return (
                <ReservationUser
                  key={index}
                  img={ele.img}
                  name={ele.name}
                  instapage={ele.instapage}
                  resturant={ele.resturantL}
                  thing={ele.thing}
                  country={ele.country}
                  city={ele.city}
                  offer={ele.offer}
                  payment={ele.payment}
                  pay={ele.pay}
                  percent={ele.percent}
                  time={ele.time}
                  resTime={ele.resTime}
                  imageoffer={ele.imageoffer}
                />
              );
            })}
          </div>

          <div className="reservation__contentB">
            <div className="filters">
              <div className="filter__title">
                <h1>Filters</h1>
              </div>
              <div className="filter__input">
                <input type="text" placeholder="Search" />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <hr />
            </div>

            <div className="location">
              <div className="location__title">
                <h1>Location</h1>
              </div>
              <div className="milano">
                <input type="checkbox" />
                <span>Milano (41)</span>
              </div>
              <div className="budapet">
                <input type="checkbox" />
                <span>Budapet (15)</span>
              </div>
              <div className="london">
                <input type="checkbox" />
                <span>London (60)</span>
              </div>
              <div className="paris">
                <input type="checkbox" />
                <span>Paris (12)</span>
              </div>
              <div className="miami">
                <input type="checkbox" />
                <span>Miami (140)</span>
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;
