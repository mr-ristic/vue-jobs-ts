import { MutationTree } from 'vuex';
import { LoginProps } from './interface';
import { MutationTypes, EMAIL_ERROR } from './const';

export const mutations: MutationTree<LoginProps> = {
  [MutationTypes.SET_EMAIL_ERROR](state) {
    state.errors.email = EMAIL_ERROR;
  }
};
