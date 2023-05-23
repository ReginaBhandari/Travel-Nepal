import DBModel from './DBModel.js';

/**
 * Model for review table
 *
 * @class Review
 */
class Review extends DBModel {
  constructor() {
    super('reviews');
  }
}

export default Review;
