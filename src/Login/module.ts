import { Module, ActionTree } from 'vuex';
import { LoginProps, StateProps } from './interface';
import { actions } from './actions';
import { mutations } from './mutations';

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
  mutations
};

export default LoginModule;
