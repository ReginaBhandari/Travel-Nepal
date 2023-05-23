// import { FETCH_DESTINATIONS } from "../actions/destinations";

import {
  FETCH_BOOKINGS_FULFILLED,
  FETCH_BOOKINGS_PENDING,
  FETCH_BOOKINGS_REJECTED,
} from "../../actions/bookings";

const INITIAL_STATE = {
  bookings: [],
  isLoading: false,
};

function bookingReducer(state = INITIAL_STATE, action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_BOOKINGS_PENDING:
      return { ...state, isLoading: true };

    case FETCH_BOOKINGS_FULFILLED:
      return { ...state, bookings: action.payload, isLoading: false };

    case FETCH_BOOKINGS_REJECTED:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

export default bookingReducer;
