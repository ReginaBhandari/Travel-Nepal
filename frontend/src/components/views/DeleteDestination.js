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

function DeleteDestination() {
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

  function onDelete(id) {
    // e.preventDefault();
    const url = `${config.apiUrl}${config.endpoints.destination}`;
    axios
      .delete(interpolate(url, { id }))
      .then((response) => {
        const { data } = response;
        // console.log(data);

        if (response.status === 200) {
          cogoToast.success("Deleted record Successfully");
          dispatch(fetchDestinations);
          history.push("/");
        }
      })
      .catch((err) => {
        const { response } = err;
        // console.log(response.data);
        cogoToast.error(response.data.message);
      });
  }
  console.log(profile);
  return (
    <div className="delete-destination">
      <button className="landing-page " onClick={jumpToHome}>
        <AiFillHome />
      </button>
      <div className="title">
        <h1> DELETE DESTIANTION</h1>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <table className="bookings">
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Destination Name</th>
                {/* <th>Destination Details</th> */}
                {/* <th>Price</th> */}
                <th>Delete Operation</th>
              </tr>
            </thead>

            <tbody>
              {destinations.map((destination, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>{destination.destinationName}</td>

                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        onDelete(destination.id);
                      }}
                    >
                      Delete
                    </button>
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

export default DeleteDestination;
