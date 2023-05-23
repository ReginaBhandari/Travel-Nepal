import config from "../config";
import axios from "axios";
import { interpolate } from "../utils/string";

export const fetchBookings = async () => {
  const url = `${config.apiUrl}${config.endpoints.bookings}`;

  const { data } = await axios.get(url);
  return data;
};
