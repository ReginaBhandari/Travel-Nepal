import * as reviewService from '../services/review.js'; // only for named Export

/**
 * Controller to get details of all images
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getReviews(req, res, next) {
  reviewService
    .getReviews()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
