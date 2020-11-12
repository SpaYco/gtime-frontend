import { UPDATE_CATEGORIES } from '../actions/index';

const INITIAL_STATE = [];

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return action.data;
    default:
      return [...state];
  }
};

export default categoriesReducer;
