import { getters } from './getters';
const mockState = {
  loader: false,
  data: [
    {
      id: 1,
      start_time: '2019-01-24 00:29:03',
      end_time: '2019-01-24 12:29:03',
      client: {
        name: 'Client name'
      },
      user: { email: 'email' },
      jobRequest: { jobType: { name: 'Job name' } }
    }
  ],
  pagination: {
    count: 15,
    current_page: 1,
    per_page: 15,
    total: 4391,
    total_pages: 293
  }
};
describe('Jobs getters test', () => {
  it('should returen parsed object with jobs data', () => {
    expect(getters['getData'](mockState, {}, { token: '' }, {})).toEqual([
      {
        id: 1,
        clientName: 'Client name',
        endTime: '2019-01-24 12:29:03',
        jobName: 'Job name',
        startTime: '2019-01-24 00:29:03',
        userName: 'email'
      }
    ]);
  });
  it('should return parsed pagination meta data', () => {
    expect(getters['getPagination'](mockState, {}, { token: '' }, {})).toEqual({
      perPage: 15,
      currentPage: 1,
      total: 4391,
      totalPages: 293
    });
  });
});
