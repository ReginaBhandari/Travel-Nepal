import * as bookingService from "../services/booking.js"; // only for named Export
import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";

/**
 * Controller to get details of all bookings
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getallBookings(req, res, next) {
  bookingService
    .getAllBookings(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to post details of booking
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function postBookings(req, res, next) {
  try {
    let token = req.headers["authorization"].split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Authoriztion Credentials was not found",
      });
    }

    var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    // console.log("Decoded:", decoded);

    const { startDate, endDate } = req.body;

    if (decoded) {
      const reqData = {
        ...req.body,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        bookedBy: decoded.id,
      };
      console.log(reqData);
      return bookingService
        .addBooking(reqData)
        .then((data) => res.json(data))
        .catch((err) => next(err));
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

/**
 * Controller to get details of logged in user
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getuserbooking(req, res, next) {
  try {
    let token = req.headers["authorization"].split(" ")[1];

    logger.info(token);

    if (!token) {
      return res.status(401).json({
        message: "Authoriztion Credentials was not found",
      });
    }

    var decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    if (decoded) {
      return bookingService
        .getUserBooking(decoded.id)
        .then((data) => res.json(data))
        .catch((err) => next(err));
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
