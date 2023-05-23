import axios from "axios";
import configuration from "../config";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_REJECTED = "FETCH_USER_REJECTED";
export const CLEAR_USER = "CLEAR_USER";
export const FETCH_USER_FULFILLED = "FETCH_USER_FULFILLED";
export const FETCH_USERBOOKING_PENDING = "FETCH_USERBOOKING_PENDING";
export const FETCH_USERBOOKING_REJECTED = "FETCH_USERBOOKING_REJECTED";
export const FETCH_USERBOOKING_FULFILLED = "FETCH_USERBOOKING_FULFILLED";

export const getToken = () => {
  return localStorage.getItem("Token");
};

export const getProfile = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  };
  dispatch({
    type: FETCH_USER_PENDING,
  });
  try {
    const url = `${configuration.apiUrl}${configuration.endpoints.profile}`;

    const response = await axios.get(url, config);

    dispatch({
      type: FETCH_USER_FULFILLED,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_USER_REJECTED,
    });
  }
};

export const getUserBooking = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  };
  dispatch({
    type: FETCH_USERBOOKING_PENDING,
  });
  try {
    const url = `${configuration.apiUrl}${configuration.endpoints.userbooking}`;
    const response = await axios.get(url, config);

    dispatch({
      type: FETCH_USERBOOKING_FULFILLED,
      payload: response.data?.data,
    });
  } catch {
    dispatch({
      type: FETCH_USERBOOKING_REJECTED,
    });
  }
};
