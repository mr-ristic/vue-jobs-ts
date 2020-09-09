import { getters } from './getters';
const mockState = {
  loader: false,
  data: [
    {
      start_time: '2019-01-24 00:29:03',
      end_time: '2019-01-24 12:29:03',
      client: {
        name: 'Client name'
      },
      user: { email: 'email' },
      jobRequest: { jobType: { name: 'Job name' } }
    }
  ]
};
describe('Jobs getters test', () => {
  it('should returen parsed object', () => {
    expect(getters['getData'](mockState, {}, { token: '' }, {})).toEqual([
      {
        clientName: 'Client name',
        endTime: '2019-01-24 12:29:03',
        jobName: 'Job name',
        startTime: '2019-01-24 00:29:03',
        userName: 'email'
      }
    ]);
  });
});
