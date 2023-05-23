import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchDestinations from "../../actions/destinations";
import cogoToast from "cogo-toast";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as destinationService from "../../services/destination";
import interpolate from "pinterpolate";
import config from "../../config";
import { getProfile, getUserBooking } from "../../actions/user";
import { AiFillHome } from "react-icons/ai";

function DisplayDestination() {
  const dispatch = useDispatch();
  const destinations = useSelector((store) => store.destination.destinations);
  const { profile, bookings, isLoading } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getUserBooking());
  }, []);

  useEffect(() => {
    dispatch(fetchDestinations);
  }, []);

  function jumpToHome(e) {
    e.preventDefault();
    history.push("/");
  }

  function fetchUser() {
    if (!profile?.isAdmin) {
      history.replace("/");
      cogoToast.warn("You are not authorized");
      console.log(profile);
    }
  }

  useEffect(() => {
    if (profile?.name) {
      fetchUser();
    }
  }, [profile]);

  function destinationPage(id) {
    // e.preventDefault();
    history.push(`/destinations/${id}`);
  }

  //   console.log(profile);
  return (
    <div className="display-destination">
      <button className="landing-page " onClick={jumpToHome}>
        <AiFillHome />
      </button>
      <div className="title">
        <h1> Display Destination</h1>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {document.addEventListener("DOMContentLoaded", () => {
            const rows = document.querySelectorAll("tr[data-href]");
            console.log(rows);
          })}
          <table className="bookings">
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Destination Name</th>
                <th>Destination Details</th>
                <th>Price</th>
                <th>Image Links</th>
              </tr>
            </thead>

            <tbody>
              {destinations.map((destination, index) => (
                <tr key={index} onClick={() => destinationPage(destination.id)}>
                  <td>{index + 1}</td>
                  <td>{destination.destinationName}</td>

                  <td>
                    <div className="overflow-ellipsis">
                      {destination.description}
                    </div>
                  </td>
                  <td className="destination-price">Rs. {destination.price}</td>
                  <td className="destination-image-link">
                    {destination.images?.length > 0 &&
                      destination.images?.map((image, index) => (
                        // <img src={image} alt="Images" />
                        <ul key={index}>
                          <li>
                            <a
                              href={image}
                              // style={{ pointerEvents: "none" }}
                              onClick={(e) => e.stopPropagation()}
                              target="_blank"
                            >
                              Image {index + 1}
                            </a>
                          </li>
                        </ul>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}{" "}
    </div>
  );
}

export default DisplayDestination;
