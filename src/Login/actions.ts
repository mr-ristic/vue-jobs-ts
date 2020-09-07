import { ActionTree } from 'vuex';
import { ActionTypes } from './const';
import { LoginProps, StateProps } from './interface';

export const actions: ActionTree<LoginProps, StateProps> = {
  [ActionTypes.SET_ERROR]({ commit }, payload: string) {
    console.log({ commit, payload });
  }
};
