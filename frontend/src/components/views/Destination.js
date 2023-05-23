import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as destinationService from "../../services/destination";
import "../../assests/css/destination.css";
import { useHistory } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import ImageGallery from "../sections/ImageGallery";

function Destination(props) {
  const [destination, setDestination] = useState({});
  const { id } = props.match.params;

  const history = useHistory();

  useEffect(() => {
    const fetchDestinations = async () => {
      const destination = await destinationService.fetchDestinationsById(id);

      setDestination(destination);
    };
    fetchDestinations();
  }, []);

  function jumpToBooking(e) {
    e.preventDefault();
    history.push("/destinations#hero");
  }

  function jumpToHome(e) {
    history.push("/");
  }

  return (
    <div id="destination">
      <button className="landing-page " onClick={jumpToHome}>
        <AiFillHome />
      </button>
      <div className="title">
        <h1> {destination.destinationName}</h1>
      </div>

      <ImageGallery name={id} />

      <div className="about">
        <div className="destination-desc">
          <h2>About {destination.destinationName}</h2>
          <p>{destination.description}</p>
          <br />
          <div className="destination-desc-blocks">
            <h2>Price : Rs.{destination.price}</h2>
            <button onClick={jumpToBooking}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
