import { mutations } from './mutations';
import { MutationTypes, EMAIL_ERROR } from './const';

describe('Login mutations test', () => {
  it('should set email error', () => {
    const state = {
      errors: {
        email: false,
        password: false,
        message: false
      }
    };
    mutations[MutationTypes.SET_EMAIL_ERROR](state);
    expect(state.errors.email).toEqual(EMAIL_ERROR);
  });
});
