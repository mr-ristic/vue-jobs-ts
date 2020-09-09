import { MutationTree } from 'vuex';
import { MutationTypes } from './const';

export const mutations: MutationTree<any> = {
  [MutationTypes.SET_LOADER](state, payload: boolean) {
    state.loader = payload;
  },
  [MutationTypes.FETCH_DATA_SUCCESS](state, payload: Array<Object>) {
    state.data = payload;
  },
  [MutationTypes.SET_PAGINATION_DATA](state, { pagination }) {
    state.pagination = pagination;
  }
};
