import Boom from "@hapi/boom";

import Destination from "../models/Destination.js";
import DestinationImage from "../models/destinationImage.js";
// import Review from '../models/Review.js';
import logger from "../utils/logger.js";

/**
 * Get all destinations
 *
 * @param {Object} [query]
 * @return {Object}
 * */
export async function getAllDestinations(query) {
  const priceFilter = query.price ? query.price.split(",").map(Number) : [];
  const destinationFilter = query.destinationName
    ? query.destinationName.split(",")
    : [];

  logger.info("Fetching a list of all destinations");

  const destinations = await new Destination().getAllDestinations();

  const paresdDestinations = destinations.map((destination) => ({
    ...destination,
    images: destination.images ? destination.images.split(",") : [],
    reviews: destination.reviews ? destination.reviews.split(",") : [],
  }));

  let filteredDestinations = paresdDestinations;

  if (priceFilter.length) {
    filteredDestinations = paresdDestinations.filter((destination) =>
      priceFilter.includes(destination.price)
    );
  }

  if (destinationFilter.length) {
    filteredDestinations = paresdDestinations.filter((destination) =>
      destinationFilter.includes(destination.destinationName)
    );
  }

  return {
    data: filteredDestinations,
    message: "List of destinations",
  };
}

/**
 * Get specific destination by id
 *
 * @param {string} id
 * @returns {object}
 */
export async function getDestination(id) {
  logger.info(`Fetching destination with destinationId ${id}`);

  const destination = await new Destination().getDestinationDetails(id);

  // console.log(destination);
  if (!destination) {
    logger.error(`Cannot find destination with destinationId ${id}`);

    throw new Boom.notFound(`Cannot find destination with destinationId ${id}`);
  }

  const parsedDesatination = {
    ...destination,
    images: destination.images ? destination.images.split(",") : [],
    reviews: destination.reviews ? destination.reviews.split(",") : [],
  };

  return {
    data: parsedDesatination,
    message: `Details of destinationId ${id}`,
  };
}

/**
 * Post destination
 *
 * @param {object}
 * @returns {object}
 */
export async function addDestination(params) {
  logger.info(`Payload Recieved ${params}`);

  const destinationTableInsertParams = {
    destinationName: params.destinationName,
    description: params.description,
    price: params.price,
  };

  const existingData = await new Destination().findByParams(
    destinationTableInsertParams
  );

  if (existingData) {
    logger.error("Data with same payload already exists");

    throw new Boom.badRequest("Data with same payload already exists");
  }

  logger.info("Saving new destination data");
  const [destinationTableInsertData] = await new Destination().save(
    destinationTableInsertParams
  );

  if (params.images.length) {
    logger.info("Creating insert data for destination_images table");
    const destinationImagesInsertData = params.images.map((url) => ({
      destinationId: destinationTableInsertData.id,
      imageUrl: url,
    }));

    logger.info(
      `Inserting ${destinationImagesInsertData.length} records into the destination_images table `
    );
    destinationImagesInsertData.forEach(async (insertData) => {
      await new DestinationImage().save(insertData);
    });
  }

  // if (params.reviews.length) {
  //   logger.info('Creating insert data for reviews table');
  //   const destinationReviewsInsertData = params.reviews.map((comment) => ({
  //     destinationId: destinationTableInsertData.id,
  //     reviewerId:userTableInsertParams.id,
  //     comment: comment,
  //   }));

  //   logger.info(
  //     `Inserting ${destinationImagesInsertData.length} records into the destination_images table `
  //   );
  //   destinationImagesInsertData.forEach(async (insertData) => {
  //     await new DestinationImage().save(insertData);
  //   });
  // }

  logger.info("Retriving the saved car details");
  const data = await new Destination().getDestinationDetails(
    destinationTableInsertData.id
  );

  return {
    data,
    message: "Record added successfully",
  };
}

/**
 * Update existing destination record
 *
 * @param {string} id
 * @param {Object} params
 * @returns {Object}
 */
export async function updateDestination(id, params) {
  logger.info(`Checking existance of destination with id ${id}`);

  const destination = await new Destination().getById(id);

  if (!destination) {
    logger.error(`Cannot find destination with id ${id}`);

    throw new Boom.notFound(`Cannot find destination with id ${id}`);
  }

  logger.info(`Updating data of destination with id ${id}`);
  await new Destination().updateById(id, {
    destinationName: params.destinationName,
    description: params.description,
    price: params.price,
  });

  if (params.images?.added?.length) {
    params.images.added.forEach(async (url) => {
      await new DestinationImage().save({ destinationId: id, imageUrl: url });
    });
  }

  if (params.images?.removed?.length) {
    params.images.removed.forEach(async (url) => {
      await new DestinationImage().removeByParams({
        destinationId: id,
        imageUrl: url,
      });
    });
  }

  logger.info(`Fetching updated data of destination with id ${id}`);
  const updatedData = await new Destination().getDestinationDetails(id);

  return {
    data: updatedData,
    message: "Record Updated Successfully",
  };
}

/**
 * Remove an existing record based on identifier
 *
 * @param {string} id
 * @returns {Object}
 */
export async function removeDestination(id) {
  logger.info(`Checking if destination with id ${id} exists`);
  const destination = await new Destination().getById(id);

  if (!destination) {
    logger.error(
      `Cannot delete destination with id ${id}because it doesn't exist`
    );

    throw new Boom.notFound(
      `Cannot delete destination with id ${id}because it doesn't exist`
    );
  }

  await new DestinationImage().removeByParams({ destinationId: id });
  await new Destination().removeById(id);

  return {
    message: "Record removed successfully",
  };
}
