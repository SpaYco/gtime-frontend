import { UPDATE_GAMES } from '../actions/index';

const INITIAL_STATE = [];

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_GAMES:
      return action.data;
    default:
      return [...state];
  }
};

export default gamesReducer;
