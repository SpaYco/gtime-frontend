import {
  UPDATE_GAMES, UPDATE_USER, updateUser, updateGames,
} from '../../actions/index';

describe('main actions', () => {
  it('contains UPDATE_USER variable', () => {
    expect(UPDATE_USER).toBe('UPDATE_USER');
  });
  it('contains UPDATE_GAMES variable', () => {
    expect(UPDATE_GAMES).toBe('UPDATE_GAMES');
  });
  it('updateUser returns an object', () => {
    const result = updateUser('hello');
    expect(typeof result).toBe('object');
  });
  it('searchRecipe returns an object with data', () => {
    const result = updateUser('hello');
    expect(result.data).toBe('hello');
  });

  it('searchRecipe returns an object with type', () => {
    const result = updateUser('hello');
    expect(result.type).toBe(UPDATE_USER);
  });

  it('updateGames returns an object', () => {
    const result = updateGames('hello');
    expect(typeof result).toBe('object');
  });
  it('updateGames returns an object with data', () => {
    const result = updateGames('hello');
    expect(result.data).toBe('hello');
  });

  it('updateGames returns an object with type', () => {
    const result = updateGames('hello');
    expect(result.type).toBe(UPDATE_GAMES);
  });
});
