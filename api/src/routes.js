import { Router } from "express";

import * as destinationController from "./controllers/destination.js";
import * as apiController from "./controllers/api.js";
import * as userController from "./controllers/user.js";
import * as destinationImageController from "./controllers/destinationImages.js";
import * as reviewController from "./controllers/review.js";
import * as bookingController from "./controllers/booking.js";

import { validateBody, validateQueryParams } from "./middlewares/validation.js";

import addDestinationSchema from "./schemas/addDestination.js";
import updateDestinationSchema from "./schemas/updateDestination.js";
import addUserSchema from "./schemas/addUser.js";
import loginSchema from "./schemas/login.js";
import getDestinationsQuerySchema from "./schemas/getDestinationQuery.js";
import addBookingQuerySchema from "./schemas/addBooking.js";
import getUserQuerySchema from "./schemas/getUsersQuery.js";

// import authenticate from './middlewares/authenticate.js';

import connection from "./knexfile.js";
import authenticate from "./middlewares/authenticate.js";

const router = Router();

router.get("/", apiController.getAPIDetails);

// get all
router.get(
  "/destinations",
  validateQueryParams(getDestinationsQuerySchema),
  destinationController.getDestinations
);

router.get("/abcd", async (req, res, next) => {
  const data = await connection("destination").select("*");

  res.json(data);
});

router.get("/images", destinationImageController.getDestinationImages);

router.get("/reviews", reviewController.getReviews);

// get specific
router.get(
  "/destinations/:destinationIdentifier",
  destinationController.getDestination
);

// post
router.post(
  "/destinations",
  validateBody(addDestinationSchema),
  authenticate,
  destinationController.saveDestination
);

// put
router.put(
  "/destinations/:destinationIdentifier",
  authenticate,
  validateBody(updateDestinationSchema),
  destinationController.updateDestination
);

// delete
router.delete(
  "/destinations/:destinationIdentifier",
  destinationController.removeDestination
);

router.post("/users", validateBody(addUserSchema), userController.addUser);
router.get("/users", userController.getUsers);
router.get("/profile", userController.getUser);

router.post("/login", validateBody(loginSchema), userController.login);

router.get("/userbooking", authenticate, bookingController.getuserbooking);
router.get("/bookings", authenticate, bookingController.getallBookings);
router.post(
  "/bookings",
  validateBody(addBookingQuerySchema),
  authenticate,
  bookingController.postBookings
);
export default router;
