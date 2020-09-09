import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { ActionTypes } from './const';
import Jobs from '.';

const localVue = createLocalVue();
localVue.use(Vuex);
const computed = {
  loader: () => false,
  data: () => false,
  getData: () => false,
  pagination: () => false
};

describe('Jobs.vue tests', () => {
  let actions;
  let store;
  beforeEach(() => {
    actions = {
      [ActionTypes.FETCH_DATA_ACTION]: jest.fn()
    };

    store = new Vuex.Store({
      state: {},
      actions
    });
  });
  it('should render Jobs component', () => {
    const wrapper = shallowMount(Jobs, { store, computed, localVue });
    expect(wrapper).toBeTruthy();
    wrapper.destroy();
  });

  it('should call fetch data action', () => {
    const wrapper = shallowMount(Jobs, { store, computed, localVue });
    expect(actions[ActionTypes.FETCH_DATA_ACTION]).toHaveBeenCalledTimes(1);
    wrapper.destroy();
  });
});
