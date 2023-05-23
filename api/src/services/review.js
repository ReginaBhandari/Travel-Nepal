import Review from '../models/Review.js';
import logger from '../utils/logger.js';

/**
 * Get list of reviews
 *
 * @returns {Object}
 *
 */
export async function getReviews() {
  logger.info('Fetching Reviews');

  const data = await new Review().getAll();

  return {
    data,
    message: 'List of Reviews',
  };
}
