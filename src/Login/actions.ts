import { ActionTree } from 'vuex';
import { ActionTypes, MutationTypes } from './const';
import { LoginProps, StateProps, FieldsProps } from './interface';
import { API_URL } from '../const';
import { postData } from '../network';
import { ErrorTypes } from '@/errors/const';
import errorHandle from '@/errors';

export const actions: ActionTree<LoginProps, StateProps> = {
  [ActionTypes.SET_ERROR]({ commit }, payload: string) {
    if (payload === 'email') {
      commit(ErrorTypes.SET_EMAIL_ERROR);
    }
    if (payload === 'password') {
      commit(ErrorTypes.SET_PASSWORD_ERROR);
    }
  },
  [ActionTypes.RESET_ERROR]({ commit }, payload: string | boolean) {
    commit(MutationTypes.RESET_ERROR, payload);
  },
  [ActionTypes.SUBMIT_FORM]({ commit }, payload: FieldsProps) {
    commit(MutationTypes.SET_SUBMITTING, true);
    commit(MutationTypes.RESET_ERROR, false);
    postData(`${API_URL}auth/login`, {
      email: payload.email,
      password: payload.password
    })
      .then((data) => {
        commit(MutationTypes.SET_SUBMITTING, false);
        commit(MutationTypes.LOGIN_SUCCESS, data.token);
        localStorage.setItem('token', data.token);
        payload.router.push('/jobs');
      })
      .catch(({ response }) => {
        commit(MutationTypes.SET_SUBMITTING, false);
        errorHandle(response.data, ErrorTypes.SET_SERVER_ERROR, commit);
      });
  }
};
