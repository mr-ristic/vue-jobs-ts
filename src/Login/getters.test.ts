import { getters } from './getters';
import { GetterTypes } from './const';
import { initialLoginState } from './module';

describe('Login getters test', () => {
  let state = initialLoginState;

  it('should return no errors', () => {
    expect(getters[GetterTypes.CHECK_ERRORS](state, {}, {}, {})).toBe(false);
  });
  it('should return errors true', () => {
    state.errors.email = true;
    expect(getters[GetterTypes.CHECK_ERRORS](state, {}, {}, {})).toBe(true);
  });
});
