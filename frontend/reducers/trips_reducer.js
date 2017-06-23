import merge from 'lodash/merge';

import {
  RECEIVE_TRIPS,
  RECEIVE_TRIP
} from '../actions/trip_actions';

const defaultState = {
  entities: {},
  currentTrip: null,
};


const tripReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TRIPS:
      // return merge(newState, { entities: action.trips });
      return merge({}, defaultState, { entities: action.trips })

    case RECEIVE_TRIP:
      return merge( newState,{
        entities: { [action.trip.id]: action.trip },
        currentTrip: action.trip.id
      });

    default:
      return state;
  }

};

export default tripReducer;
