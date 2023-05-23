import axios from "axios";
import React, { useEffect, useState } from "react";
import homeImage from "../../assests/heading-image.jpg";
import { useHistory } from "react-router-dom";
import cogoToast from "cogo-toast";
import { useDispatch, useSelector } from "react-redux";
import fetchDestinations from "../../actions/destinations";
import configuration from "../../config";

export default function Hero() {
  var today = new Date();
  var minCheckInDate =
    today.getFullYear() +
    "-" +
    `${today.getMonth() + 1}`.padStart(2, "0") +
    "-" +
    `${today.getDate() + 1}`.padStart(2, "0");


  const [bookstartDate, setstartDate] = useState("");
  const [bookendDate, setendDate] = useState("");
  const [userId, setuserId] = useState("");
  const [bookdestinationId, setdestinationId] = useState("");

  var minCheckOutDate = bookstartDate;

  const Token = localStorage.getItem("Token");
  const config = {
    headers: {
      Authorization: "Bearer " + Token,
    },
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const destinations = useSelector((store) => store.destination.destinations);

  function addBooking(e) {
    e.preventDefault();
    const postBooking = {
      startDate: bookstartDate,
      endDate: bookendDate,
      destinationId: bookdestinationId,
    };

    console.log(postBooking)
    const url = `${configuration.apiUrl}${configuration.endpoints.bookings}`;
    axios
      .post(url, postBooking, config)
      .then((response) => {
        const { data } = response;

        if (response.status === 200) {
          cogoToast.success("Booking Successfull");
          history.push("/");
        }
      })
      .catch((err) => {
        const { response } = err;
        cogoToast.error(response.data.message);
      });
  }
  useEffect(() => {
    dispatch(fetchDestinations);
  }, []);

  return (
    <>
      <div id="hero">
        <img
          src={homeImage}
          alt="backgroundImage"
          className="hero-background"
        />

        <div className="content">
          <div className="title">
            <h1>Travel Nepal</h1>
            <p>
              Travel and find happiness within yourself. Experience holidays in
              Nepal and find the best time to go and the best places to visit.
            </p>
          </div>
          <div className="search">
            <div className="formItem">
              <label htmlFor="">Where you want to go</label>
              <select
                name="bookdestinationId"
                onChange={(e) => {
                  if (e.target.value) {
                    setdestinationId(e.target.value);
                  }
                }}
              >
                <option value=" ">Choose Destinations </option>
                {destinations.map((destination, index) => (
                  <option key={index} value={destination.id}>
                    {destination.destinationName}
                  </option>
                ))}
              </select>
            </div>

            <div className="formItem">
              <label htmlFor="">Check-in</label>
              <input
                type="date"
                min={minCheckInDate}
                onChange={(e) => {
                  setstartDate(e.target.value);
                }}
              />
            </div>

            <div className="formItem">
              <label htmlFor="">Check-out</label>
              <input
                type="date"
                disabled={!bookstartDate}
                min={minCheckOutDate}
                onChange={(e) => {
                  setendDate(e.target.value);
                }}
              />
            </div>
            <button onClick={addBooking}>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
