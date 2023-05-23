import * as destinationService from '../services/destination.js'; // only for named Export

/**
 * Controller to get details of all cars
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getDestinations(req, res, next) {

  destinationService
    .getAllDestinations(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get detail of specific cars
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getDestination(req, res, next) {
  destinationService
    .getDestination(+req.params.destinationIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to add new car record
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function saveDestination(req, res, next) {
  destinationService
    .addDestination(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to update details of all cars
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function updateDestination(req, res, next) {
  destinationService
    .updateDestination(+req.params.destinationIdentifier, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to remove a car record
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function removeDestination(req, res, next) {
  destinationService
    .removeDestination(+req.params.destinationIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
