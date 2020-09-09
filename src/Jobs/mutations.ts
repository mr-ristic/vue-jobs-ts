import { MutationTree } from 'vuex';
import { MutationTypes } from './const';
import { JobsProps } from './interface';

export const mutations: MutationTree<JobsProps> = {
  [MutationTypes.SET_LOADER](state, payload: boolean) {
    state.loader = payload;
  },
  [MutationTypes.FETCH_DATA_SUCCESS](state, payload: Array<Object>) {
    state.data = payload;
  }
};
