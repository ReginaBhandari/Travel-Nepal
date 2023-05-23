import config from "../config";
import axios from "axios";
import { interpolate } from "../utils/string";

export const fetchDestinations = async () => {
  const url = `${config.apiUrl}${config.endpoints.destinations}`;

  const { data } = await axios.get(url);
  return data;
};

export const fetchDestinationsById = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.destination}`;

  const { data } = await axios.get(interpolate(url, { id }));

  // console.log(data.data);
  return data.data;
};

export const postDestinations = async (postData) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.destinations}`;
    const { data } = await axios.post(url, postData);

    return data;
  } catch (err) {
    // console.log(err);
    return err.response.data.message;
  }
};

export const updateDestinations = async (postData, id) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.destination}`;
    const { data } = await axios.put(interpolate(url, { id }), postData);
    // console.log("Updated", data);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

export const deleteDestinationbyId = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.destinations}`;
  const { data } = await axios.delete(interpolate(url, { id }));

  return data;
};
