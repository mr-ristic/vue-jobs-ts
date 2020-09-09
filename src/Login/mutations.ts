import { MutationTree } from 'vuex';
import { LoginProps } from './interface';
import { MutationTypes, EMAIL_ERROR, PASSWORD_ERROR } from './const';
import { ErrorTypes } from '@/errors/const';

export const mutations: MutationTree<LoginProps> = {
  [ErrorTypes.SET_EMAIL_ERROR](state) {
    state.errors.email = EMAIL_ERROR;
  },
  [ErrorTypes.SET_PASSWORD_ERROR](state) {
    state.errors.password = PASSWORD_ERROR;
  },
  [ErrorTypes.SET_SERVER_ERROR](state, payload) {
    state.errors.message = payload;
  },
  [MutationTypes.RESET_ERROR](state, payload: string) {
    if (payload === 'email') state.errors.email = false;
    if (payload === 'password') state.errors.password = false;
    if (payload === 'other') state.errors.message = false;
    if (!payload) {
      state.errors = {
        message: false,
        email: false,
        password: false
      };
    }
  },
  [MutationTypes.SET_SUBMITTING](state, payload: boolean) {
    state.submitting = payload;
  }
};
