import Booking from "../models/Booking.js";
import logger from "../utils/logger.js";

/**
 * Get list of bookings
 *
 * @returns {Object}
 *
 */
export async function getAllBookings(query) {
  logger.info("Fetching Bookings");

  const data = await new Booking().getAllBookings();

  return {
    data,
    message: "List of Booking",
  };
}

/**
 * post bookings
 *
 * @returns {Object}
 *
 */
export async function addBooking(params) {
  logger.info("Posting Booking");
  logger.info(`Payload Recieved ${params}`);

  const data = await new Booking().save(params);

  return {
    data,
    message: "Record added Successfully",
  };
}

export async function getUserBooking(id) {
  logger.info(`Fetching user with userId ${id}`);
  const data = await new Booking().getUserDetails(id);
  

  if (!data) {
    logger.error(`Cannot find user with booking userId ${id}`);

    throw new Boom.notFound(`Cannot find booking of user with userId ${id}`);
  }

  return {
    data,
    message: `Details of booking of userId ${id}`,
  };
}
