import { Module } from 'vuex';
import { JobsProps } from './interface';
import { RootStateProps } from '../store/interface';
import { actions } from './actions';

export const initialState = {};

const JobsModule: Module<JobsProps, RootStateProps> = {
  state: () => ({ ...initialState }),
  actions
};

export default JobsModule;
