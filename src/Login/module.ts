import { Module, ActionTree } from 'vuex';
import { LoginProps, StateProps } from './interface';
import { actions } from './actions';

const LoginModule: Module<LoginProps, StateProps> = {
  state: () => ({
    errors: {
      email: false,
      password: false,
      message: false
    }
  }),
  actions
};

export default LoginModule;
