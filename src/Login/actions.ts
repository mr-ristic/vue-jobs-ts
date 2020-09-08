import { ActionTree } from 'vuex';
import { ActionTypes, MutationTypes } from './const';
import { LoginProps, StateProps, FieldsProps } from './interface';
import { API_URL } from '../const';
import { postData } from '../network';

export const actions: ActionTree<LoginProps, StateProps> = {
  [ActionTypes.SET_ERROR]({ commit }, payload: string) {
    if (payload === 'email') {
      commit(MutationTypes.SET_EMAIL_ERROR);
    }
    if (payload === 'password') {
      commit(MutationTypes.SET_PASSWORD_ERROR);
    }
  },
  [ActionTypes.RESET_ERROR]({ commit }, payload: string | boolean) {
    commit(MutationTypes.RESET_ERROR, payload);
  },
  [ActionTypes.SUBMIT_FORM]({ commit }, payload: FieldsProps) {
    commit(MutationTypes.SET_SUBMITTING, true);
    commit(MutationTypes.RESET_ERROR, false);
    postData(`${API_URL}auth/login`, payload)
      .then((data) => {
        console.log({ data });
      })
      .catch(({ response }) => {
        commit(MutationTypes.SET_SUBMITTING, false);
        const { data } = response;
        const { message } = data;
        if (message) {
          commit(MutationTypes.SET_OTHER_ERROR, message);
        }
      });
  }
};
