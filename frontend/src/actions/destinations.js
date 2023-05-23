import * as destinationService from '../services/destination'

export const FETCH_DESTINATIONS = 'FETCH_DESTINATIONS';
export const FETCH_DESTINATIONS_PENDING = 'FETCH_DESTINATIONS_PENDING';
export const FETCH_DESTINATIONS_REJECTED = 'FETCH_DESTINATIONS_REJECTED';
export const FETCH_DESTINATIONS_FULFILLED = 'FETCH_DESTINATIONS_FULFILLED';

export default function fetchDestinations(dispatch) {
    dispatch(fetchDestinationsPending);
}

function fetchDestinationsRejected(err) {
    return {
        type: FETCH_DESTINATIONS_REJECTED,
        payload: err,
    }
}

function fetchDestinationsFulfilled(destinations) {
    return {
        type: FETCH_DESTINATIONS_FULFILLED,
        payload: destinations,
    }
}

async function fetchDestinationsPending(dispatch) {
    try {
        const data = await destinationService.fetchDestinations();
        dispatch(fetchDestinationsFulfilled(data.data));
    } catch (err) {
        dispatch(fetchDestinationsRejected(err));
    }
}