// import { FETCH_DESTINATIONS } from "../actions/destinations";

import {
  FETCH_DESTINATIONS_FULFILLED,
  FETCH_DESTINATIONS_PENDING,
  FETCH_DESTINATIONS_REJECTED,
} from "../../actions/destinations";

const INITIAL_STATE = {
  destinations: [],
  isLoading: false,
};

function destinationReducer(state = INITIAL_STATE, action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_DESTINATIONS_PENDING:
      return { ...state, isLoading: true };

    case FETCH_DESTINATIONS_FULFILLED:
      return { ...state, destinations: action.payload, isLoading: false };

    case FETCH_DESTINATIONS_REJECTED:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

export default destinationReducer;
