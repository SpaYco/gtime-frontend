import userReducer from '../../reducers/user';
import { updateUser } from '../../actions/index';

const fakeGamesRecipe = data => ({
  type: 'hey there',
  data,
});

const state = -1;

describe('Filter Reducer', () => {
  it('returns samme state if no data type is given', () => {
    const recipes = userReducer(state, fakeGamesRecipe('sup bro'));
    expect(recipes).toEqual(-1);
  });
  it('returns a new state if no data type is given', () => {
    const recipes = userReducer(state, updateUser(5));
    expect(recipes).toEqual(5);
  });
});
