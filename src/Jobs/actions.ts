import { ActionTree } from 'vuex';
import { ActionTypes, MutationTypes } from './const';
import { JobsProps } from './interface';
import { API_URL } from '../const';
import { fetchData } from '../network';
import { RootStateProps } from '@/store/interface';

export const actions: ActionTree<JobsProps, RootStateProps> = {
  [ActionTypes.FETCH_DATA_ACTION]({ commit, rootState }) {
    console.log({ rootState });
    fetchData(`${API_URL}jobs`, {
      headers: { Authorization: `Bearer ${rootState.token}` },
      body: {
        order_by: 'start_time',
        include: 'client.jobRequest,jobRequest.jobType,user'
      }
    }).then((data) => {
      console.log({ data });
    });
  }
};
