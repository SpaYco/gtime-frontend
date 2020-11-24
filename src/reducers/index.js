import { combineReducers } from 'redux';
import gamesReducer from './games';
import userReducer from './user';

const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
});

export default rootReducer;
