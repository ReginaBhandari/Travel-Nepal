import DBModel from './DBModel.js';
import getAllDestinationsQuery from '../db/queries/getAllDestinations.js';
import getDestinationDetailsQuery from '../db/queries/getDestinationDetail.js';

/**
 * Model for destination table
 *
 * @class Destination
 */
class Destination extends DBModel {
  constructor() {
    super('destination');
  }

  getAllDestinations() {
    return this.query(getAllDestinationsQuery);
  }

  async getDestinationDetails(destinationId) {
    const [details] = await this.query(getDestinationDetailsQuery, {
      destinationId,
    });

    return details || null;
  }
}

export default Destination;
