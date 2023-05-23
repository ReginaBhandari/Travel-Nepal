import * as destinationImageService from '../services/destinationImage.js'; // only for named Export

/**
 * Controller to get details of all images
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getDestinationImages(req, res, next) {
  destinationImageService
    .getImages()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
