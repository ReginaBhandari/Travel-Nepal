import {
  FETCH_USER_FULFILLED,
  FETCH_USER_PENDING,
  FETCH_USER_REJECTED,
  FETCH_USERBOOKING_FULFILLED,
  FETCH_USERBOOKING_PENDING,
  FETCH_USERBOOKING_REJECTED,
  CLEAR_USER,
} from "../../actions/user";

const INITIAL_STATE = {
  bookings: [],
  profile: {},
  isLoading: false,
};

function userReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case FETCH_USER_PENDING:
      return { ...state };

    case FETCH_USER_FULFILLED:
      return { ...state, profile: action.payload };

    case FETCH_USER_REJECTED:
      return { ...state, profile: {} };

    case FETCH_USERBOOKING_PENDING:
      return { ...state, isLoading: true };

    case FETCH_USERBOOKING_FULFILLED:
      return { ...state, bookings: action.payload, isLoading: false };

    case FETCH_USERBOOKING_REJECTED:
      return { ...state, bookings: [], isLoading: false };

    case CLEAR_USER:
      return { ...state, profile: {}, bookings: [] };

    default:
      return state;
  }
}

export default userReducer;
