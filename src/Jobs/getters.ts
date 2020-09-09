import { GetterTree } from 'vuex';
import { JobsProps } from './interface';
import { RootStateProps } from '@/store/interface';

export const getters: GetterTree<JobsProps, RootStateProps> = {
  getData(state): Array<Object> {
    const { data } = state;
    return data.map(
      ({ id, user, jobRequest, client, start_time, end_time }) => {
        return {
          id: id,
          userName: user ? user.email : 'no user fetched',
          jobName: jobRequest.jobType.name,
          clientName: client.name,
          startTime: start_time,
          endTime: end_time
        };
      }
    );
  },
  getPagination(state): Object {
    const { pagination } = state;
    if (!pagination) return false;
    const { current_page, per_page, total, total_pages } = pagination;
    return {
      perPage: per_page,
      currentPage: current_page,
      total,
      totalPages: total_pages
    };
  }
};
