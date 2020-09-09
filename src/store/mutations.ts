import { MutationTree } from 'vuex';
import { MutationTypes as LoginMutations } from '../Login/const';
import { RootStateProps } from './interface';

export const mutations: MutationTree<RootStateProps> = {
  [LoginMutations.LOGIN_SUCCESS](state, payload) {
    state.token = payload;
  }
};
