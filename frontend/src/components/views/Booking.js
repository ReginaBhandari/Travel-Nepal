import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBookings from "../../actions/bookings";
import { useHistory } from "react-router-dom";
import { getProfile, getUserBooking } from "../../actions/user";
import cogoToast from "cogo-toast";
import { AiFillHome } from "react-icons/ai";

function BookingList() {
  const dispatch = useDispatch();
  const bookings = useSelector((store) => store.booking.bookings);
  const isLoading = useSelector((store) => store.destination.isLoading);
  const { profile } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchBookings);
  }, [dispatch]);

  const history = useHistory();

  function jumpToHome(e) {
    history.push("/");
  }

  return profile?.isAdmin ? (
    <div className="recommend">
      <button className="landing-page " onClick={jumpToHome}>
        <AiFillHome />
      </button>
      <div className="title">
        <h1> Bookings</h1>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <table className="bookings">
            <thead>
              <tr>
                <th>S.N.</th>
                {/* <th>Booking Id</th> */}
                <th>Booked By</th>
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
                  {/* <td>{booking.id}</td> */}
                  <td>{booking.name}</td>
                  <td>{booking.destinationName}</td>
                  <td>{booking.price}</td>
                  <td>{booking.startDate?.split("T")[0]}</td>
                  <td>{booking.endDate?.split("T")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}{" "}
    </div>
  ) : (
    <>
      {history.replace("/login")}
      {cogoToast.warn("You are not authorized-booking")}
    </>
  );
}

export default BookingList;
