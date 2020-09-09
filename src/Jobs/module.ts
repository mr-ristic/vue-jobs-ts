import { Module } from 'vuex';
import { JobsProps } from './interface';
import { RootStateProps } from '../store/interface';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const initialState = {
  loader: false,
  data: []
};

const JobsModule: Module<any, RootStateProps> = {
  state: () => ({ ...initialState }),
  actions,
  mutations,
  getters
};

export default JobsModule;
