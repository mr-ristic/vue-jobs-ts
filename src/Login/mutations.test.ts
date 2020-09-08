import { mutations } from './mutations';
import { MutationTypes, EMAIL_ERROR, PASSWORD_ERROR } from './const';
import { initialLoginState } from './module';

describe('Login mutations test', () => {
  const state = initialLoginState;
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
  it('should delete email error', () => {
    mutations[MutationTypes.RESET_ERROR](state, 'email');
    expect(state.errors.email).toEqual(false);
  });
  it('should delete password error', () => {
    mutations[MutationTypes.RESET_ERROR](state, 'password');
    expect(state.errors.email).toEqual(false);
  });
  it('should delete other error', () => {
    mutations[MutationTypes.RESET_ERROR](state, 'other');
    expect(state.errors.message).toEqual(false);
  });
  it('should reset all the errors', () => {
    mutations[MutationTypes.RESET_ERROR](state, false);
    expect(state.errors).toEqual(initialLoginState.errors);
  });
  it('should set submitting to true', () => {
    mutations[MutationTypes.SET_SUBMITTING](state, true);
    expect(state.submitting).toBe(true);
  });
});
