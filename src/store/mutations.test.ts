import { mutations } from './mutations';
import { MutationTypes as LoginMutations } from '../Login/const';

describe('Root mutations test', () => {
  const state = { token: false };
  it('should set the token', () => {
    mutations[LoginMutations.LOGIN_SUCCESS](state, 'some-token-ascd');
    expect(state.token).toBe('some-token-ascd');
  });
  it('should reset the token', () => {
    mutations[LoginMutations.LOG_OUT](state);
    expect(state.token).toBe(false);
  });
});
