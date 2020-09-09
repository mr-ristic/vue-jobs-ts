import Vue from 'vue';
import Vuex from 'vuex';
import LoginModule from '../Login/module';
import { mutations } from './mutations';
import { getters } from './getters';
import { MutationTypes as AuthMutations } from '@/Login/const';
import JobsModule from '../Jobs/module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || false
  },
  mutations,
  getters,
  actions: {
    logOut({ commit }, payload) {
      localStorage.removeItem('token');
      commit(AuthMutations.LOG_OUT);
      payload.push('/login');
    }
  },
  modules: {
    login: LoginModule,
    jobs: JobsModule
  }
});
