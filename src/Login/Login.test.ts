import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Login from '.';
import { EMAIL_ERROR, ActionTypes } from './const';
import { actions as realActions } from './actions';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Login.vue tests', () => {
  it('should render Login component', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper).toBeTruthy();
  });

  it('should render Login form inputs', () => {
    const wrapper = mount(Login);

    const emailInput = wrapper.get('#email');
    const passwordInput = wrapper.get('#password');
    const submit = wrapper.get('button');

    expect(emailInput.attributes('name')).toEqual('email');
    expect(passwordInput.attributes('name')).toEqual('password');
    expect(submit.text()).toEqual('Sign in');
    wrapper.destroy();
  });

  it('should render error message for email', async () => {
    const actions = {
      [ActionTypes.SET_ERROR]: jest.fn()
    };
    const store = new Vuex.Store({
      actions
    });
    const wrapper = mount(Login, { store, localVue });

    const emailInput = wrapper.get('#email');
    await emailInput.setValue('not an valid email');

    expect(actions[ActionTypes.SET_ERROR]).toHaveBeenCalled();
    // expect(wrapper.find('#email-error').text()).toEqual(EMAIL_ERROR);

    wrapper.destroy();
  });
});
