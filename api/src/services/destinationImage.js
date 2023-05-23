import DestinationImage from '../models/DestinationImage.js';
import logger from '../utils/logger.js';

/**
 * Get list of destination images
 *
 * @returns {Object}
 *
 */
export async function getImages() {
  logger.info('Fetching Images');

  const data = await new DestinationImage().getAll();

  return {
    data,
    message: 'List of Images',
  };
}
