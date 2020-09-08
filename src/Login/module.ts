import { Module, ActionTree } from 'vuex';
import { LoginProps, StateProps } from './interface';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const initialLoginState = {
  errors: {
    email: false,
    password: false,
    message: false
  }
};

const LoginModule: Module<LoginProps, StateProps> = {
  state: () => initialLoginState,
  actions,
  mutations,
  getters
};

export default LoginModule;
