import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
import { getProfile, getUserBooking } from "../../actions/user";
import user from "../../assests/user.png";
import { AiFillHome } from "react-icons/ai";
import UserImage from "../sections/UserImage";

function UserProfile() {
  const Token = localStorage.getItem("Token");

  const { profile, bookings, isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getUserBooking());
  }, []);

  return Token ? (
    <>
      <div className="user">
        {/* <div className="title">
          <h1> User Profile</h1>
        </div> */}
        <div className="user-background"></div>
        <div className="user-details">
          <img src={user} alt="user" className="user-profile-image" />
          <div className="space"></div>
          <p>
            <b>{profile?.name}</b>
          </p>
          <div className="space"></div>
          <p>{profile?.email}</p>
          <p>Account Created at: {profile?.createdAt?.split("T")[0]}</p>
        </div>
      </div>

      {bookings.length != 0 ? (
        <div>
          <table className="bookings">
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Destination</th>
                <th>Price</th>
                <th>Booking Start Date</th>
                <th>Booking End Date</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.destinationName}</td>
                  <td>Rs. {parseFloat(booking.price).toFixed(2)}</td>
                  <td>{booking.startDate?.split("T")[0]}</td>
                  <td>{booking.endDate?.split("T")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
    </>
  ) : (
    <></>
  );
}

export default UserProfile;
