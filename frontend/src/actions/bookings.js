import * as bookingService from "../services/booking";

export const FETCH_BOOKINGS = "FETCH_BOOKINGS";
export const FETCH_BOOKINGS_PENDING = "FETCH_BOOKINGS_PENDING";
export const FETCH_BOOKINGS_REJECTED = "FETCH_BOOKINGS_REJECTED";
export const FETCH_BOOKINGS_FULFILLED = "FETCH_BOOKINGS_FULFILLED";

export default function fetchBookings(dispatch) {
  dispatch(fetchBookingsPending);
}

function fetchBookingsRejected(err) {
  return {
    type: FETCH_BOOKINGS_REJECTED,
    payload: err,
  };
}

function fetchBookingsFulfilled(bookings) {
  return {
    type: FETCH_BOOKINGS_FULFILLED,
    payload: bookings,
  };
}

async function fetchBookingsPending(dispatch) {
  try {
    const data = await bookingService.fetchBookings();
    dispatch(fetchBookingsFulfilled(data.data));
  } catch (err) {
    dispatch(fetchBookingsRejected(err));
  }
}
