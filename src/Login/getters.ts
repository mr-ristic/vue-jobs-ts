import { GetterTree } from 'vuex';
import { LoginProps, StateProps } from './interface';
import { GetterTypes } from './const';

export const getters: GetterTree<LoginProps, StateProps> = {
  [GetterTypes.CHECK_ERRORS](state): boolean {
    const { errors } = state;
    if (errors.email || errors.password) return true;
    return false;
  }
};
