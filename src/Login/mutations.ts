import { MutationTree } from 'vuex';
import { LoginProps } from './interface';
import { MutationTypes, EMAIL_ERROR, PASSWORD_ERROR } from './const';

export const mutations: MutationTree<LoginProps> = {
  [MutationTypes.SET_EMAIL_ERROR](state) {
    state.errors.email = EMAIL_ERROR;
  },
  [MutationTypes.SET_PASSWORD_ERROR](state) {
    state.errors.password = PASSWORD_ERROR;
  },
  [MutationTypes.SET_OTHER_ERROR](state, payload) {
    state.errors.message = payload;
  }
};
