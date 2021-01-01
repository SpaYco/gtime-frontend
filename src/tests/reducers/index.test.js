import rootReducer from '../../reducers/index';

describe('combine reducers', () => {
  it('is a function', () => {
    const result = rootReducer;
    expect(typeof result).toBe('function');
  });
});
