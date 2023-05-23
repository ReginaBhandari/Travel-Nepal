import { combineReducers } from "redux";
import bookingReducer from "./BookingReducer";
import destinationReducer from "./DestinationReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  destination: destinationReducer,
  booking: bookingReducer,
  user: userReducer,
});

export default rootReducer;
