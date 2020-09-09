import { GetterTree } from 'vuex';
import { JobsProps } from './interface';
import { RootStateProps } from '@/store/interface';

export const getters: GetterTree<JobsProps, RootStateProps> = {
  getData(state): Array<Object> {
    const { data } = state;
    return data.map(({ user, jobRequest, client, start_time, end_time }) => ({
      userName: user.email,
      jobName: jobRequest.jobType.name,
      clientName: client.name,
      startTime: start_time,
      endTime: end_time
    }));
  }
};
