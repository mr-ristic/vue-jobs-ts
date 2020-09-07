import Vue from 'vue';
import Vuex from 'vuex';
import LoginModule from '../Login/module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login: LoginModule
  }
});
