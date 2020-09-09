import { ActionTree } from 'vuex';
import { ActionTypes, MutationTypes } from './const';
import { JobsProps } from './interface';
import { API_URL } from '../const';
import { postData } from '../network';

export const actions: ActionTree<JobsProps, JobsProps> = {
  [ActionTypes.FETCH_DATA_ACTION]({ commit }) {
    console.log('action called');
  }
};
