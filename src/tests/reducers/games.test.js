import gamesReducer from '../../reducers/games';
import { updateGames } from '../../actions/index';

const fakeGamesRecipe = data => ({
  type: 'hey there',
  data,
});

const state = [];

describe('Filter Reducer', () => {
  it('returns samme state if no data type is given', () => {
    const recipes = gamesReducer(state, fakeGamesRecipe('sup bro'));
    expect(recipes).toEqual([]);
  });
  it('returns a new state if no data type is given', () => {
    const recipes = gamesReducer(state, updateGames(['sup bro']));
    expect(recipes).toEqual(['sup bro']);
  });
});
