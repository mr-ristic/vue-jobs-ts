import Vue from 'vue';
import Vuex from 'vuex';
import LoginModule from '../Login/module';
import { mutations } from './mutations';
import { getters } from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || false
  },
  mutations,
  getters,
  actions: {},
  modules: {
    login: LoginModule
  }
});
