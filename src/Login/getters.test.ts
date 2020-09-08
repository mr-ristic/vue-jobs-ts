import { getters } from './getters';
import { GetterTypes } from './const';

describe('Login getters test', () => {
  let state = {
    errors: {
      email: false,
      password: false,
      message: false
    }
  };

  it('should return no errors', () => {
    expect(getters[GetterTypes.CHECK_ERRORS](state, {}, {}, {})).toBe(false);
  });
  it('should return errors true', () => {
    state.errors.email = true;
    expect(getters[GetterTypes.CHECK_ERRORS](state, {}, {}, {})).toBe(true);
  });
});
