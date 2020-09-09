import { mutations } from './mutations';
import { MutationTypes } from './const';
import { initialState } from './module';

describe('Jobs mutation test', () => {
  const state = initialState;
  it('should set loader to true', () => {
    mutations[MutationTypes.SET_LOADER](state, true);
    expect(state.loader).toBe(true);
  });
  it('should set the data passed', () => {
    mutations[MutationTypes.FETCH_DATA_SUCCESS](state, [{}, {}]);
    expect(state.data).toEqual([{}, {}]);
  });
});
