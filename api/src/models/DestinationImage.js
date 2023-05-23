import DBModel from './DBModel.js';

/**
 * Model for destination image table
 *
 * @class DestinationImage
 */
class DestinationImage extends DBModel {
  constructor() {
    super('destination_images');
  }
}

export default DestinationImage;
