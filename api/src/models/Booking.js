import DBModel from "./DBModel.js";
import getBookingsQuery from "../db/queries/getBookings.js";
import getuserDetailsQuery from "../db/queries/getSpecificBooking.js";
import logger from "../utils/logger.js";
import camelize from "camelize";
import snakeize from "snakeize";

/**
 * Model for destination image table
 *
 * @class Bookings
 */
class Bookings extends DBModel {
  constructor() {
    super("bookings");
  }

  getAllBookings() {
    return this.query(getBookingsQuery);
  }

  async getUserDetails(bookedBy) {
    const details = await this.query(getuserDetailsQuery, {
      bookedBy,
    });

    return details || null;
  }

  // async getUserDetails(id) {
  //   const [data] = await this.connection(this.table)
  //     .select("*")
  //     .where("booked_by", id);

  //   console.log(data);

  //   return data ? camelize(data) : null;
  // }
}

export default Bookings;
