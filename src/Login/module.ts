import { Module, ActionTree } from 'vuex';
import { LoginProps, StateProps } from './interface';
import { actions } from './actions';
import { mutations } from './mutations';

const LoginModule: Module<LoginProps, StateProps> = {
  state: () => ({
    errors: {
      email: false,
      password: false,
      message: false
    }
  }),
  actions,
  mutations
};

export default LoginModule;
