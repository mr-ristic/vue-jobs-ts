import { Module, ActionTree } from 'vuex';
import { LoginProps } from './interface';
import { RootStateProps } from '../store/interface';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const initialLoginState = {
  errors: {
    email: false,
    password: false,
    message: false
  },
  submitting: false
};

const LoginModule: Module<LoginProps, RootStateProps> = {
  state: () => ({ ...initialLoginState }),
  actions,
  mutations,
  getters
};

export default LoginModule;
