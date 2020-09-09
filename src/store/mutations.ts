import { MutationTree } from 'vuex';
import { MutationTypes as AuthMutations } from '../Login/const';
import { RootStateProps } from './interface';

export const mutations: MutationTree<RootStateProps> = {
  [AuthMutations.LOGIN_SUCCESS](state, payload) {
    state.token = payload;
  },
  [AuthMutations.LOG_OUT](state) {
    state.token = false;
  }
};
