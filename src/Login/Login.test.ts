import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Login from '.';
import { EMAIL_ERROR, ActionTypes } from './const';

const localVue = createLocalVue();
localVue.use(Vuex);
const computed = {
  errors: () => ({
    email: false,
    password: false
  })
};

describe('Login.vue tests', () => {
  it('should render Login component', () => {
    const wrapper = shallowMount(Login, { computed });
    expect(wrapper).toBeTruthy();
  });

  it('should render Login form inputs', () => {
    const wrapper = mount(Login, { computed });

    const emailInput = wrapper.get('#email');
    const passwordInput = wrapper.get('#password');
    const submit = wrapper.get('button');

    expect(emailInput.attributes('name')).toEqual('email');
    expect(passwordInput.attributes('name')).toEqual('password');
    expect(submit.text()).toEqual('Sign in');
    wrapper.destroy();
  });

  it('should call SET_ERROR action on invalid email input', async () => {
    const actions = {
      [ActionTypes.SET_ERROR]: jest.fn()
    };

    const store = new Vuex.Store({
      actions
    });

    const wrapper = mount(Login, {
      store,
      computed,
      localVue
    });

    const emailInput = wrapper.get('#email');
    await emailInput.setValue('not an valid email');

    expect(actions[ActionTypes.SET_ERROR]).toHaveBeenCalled();

    wrapper.destroy();
  });

  it('should call SET_ERROR action on invalid password input', async () => {
    const actions = {
      [ActionTypes.SET_ERROR]: jest.fn()
    };

    const store = new Vuex.Store({
      actions
    });

    const wrapper = mount(Login, {
      store,
      computed,
      localVue
    });

    const passwordInput = wrapper.get('#password');
    await passwordInput.setValue('1');

    expect(actions[ActionTypes.SET_ERROR]).toHaveBeenCalled();

    wrapper.destroy();
  });
});
