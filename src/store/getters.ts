import { GetterTree } from 'vuex';
import { RootStateProps, RootComputedProps } from './interface';

export const getters: GetterTree<RootStateProps, RootStateProps> = {
  isLoggedIn: (state) => !!state.token
};
