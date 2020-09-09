import { ActionTree } from 'vuex';
import { ActionTypes, MutationTypes } from './const';
import { JobsProps } from './interface';
import { API_URL } from '../const';
import { fetchData } from '../network';
import { RootStateProps } from '@/store/interface';

export const actions: ActionTree<JobsProps, RootStateProps> = {
  [ActionTypes.FETCH_DATA_ACTION]({ commit, rootState }, paylload?: any) {
    commit(MutationTypes.SET_LOADER, true);
    fetchData(`${API_URL}jobs`, {
      headers: { Authorization: `Bearer ${rootState.token}` },
      params: {
        order_by: 'start_time',
        include: 'client.jobRequest,jobRequest.jobType,user',
        page: paylload ? paylload.pageNumber : 1,
        per_page: paylload ? paylload.perPage : 20
      }
    }).then(({ data, meta }) => {
      commit(MutationTypes.FETCH_DATA_SUCCESS, data);
      commit(MutationTypes.SET_PAGINATION_DATA, meta);
      commit(MutationTypes.SET_LOADER, false);
    });
  }
};
