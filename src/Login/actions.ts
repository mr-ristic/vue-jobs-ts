import { ActionTree } from 'vuex';
import { ActionTypes, MutationTypes } from './const';
import { LoginProps, StateProps } from './interface';

export const actions: ActionTree<LoginProps, StateProps> = {
  [ActionTypes.SET_ERROR]({ commit }, payload: string) {
    if (payload === 'email') {
      commit(MutationTypes.SET_EMAIL_ERROR);
    }
  }
};
