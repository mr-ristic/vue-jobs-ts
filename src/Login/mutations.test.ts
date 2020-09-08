import { mutations } from './mutations';
import { MutationTypes, EMAIL_ERROR, PASSWORD_ERROR } from './const';

describe('Login mutations test', () => {
  const state = {
    errors: {
      email: false,
      password: false,
      message: false
    }
  };
  it('should set email error', () => {
    mutations[MutationTypes.SET_EMAIL_ERROR](state);
    expect(state.errors.email).toEqual(EMAIL_ERROR);
  });
  it('should set password error', () => {
    mutations[MutationTypes.SET_PASSWORD_ERROR](state);
    expect(state.errors.password).toEqual(PASSWORD_ERROR);
  });
  it('should set other(server) error', () => {
    mutations[MutationTypes.SET_OTHER_ERROR](state, 'Error from the server');
    expect(state.errors.message).toEqual('Error from the server');
  });
});
