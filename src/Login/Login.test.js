import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Login from '.';
import { ActionTypes } from './const';
import { getters } from './getters';
import { initialLoginState } from './module';

const localVue = createLocalVue();
localVue.use(Vuex);

const computed = {
  errors: () => ({
    email: false,
    password: false
  }),
  submitting: () => false
};

describe('Login.vue tests', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      [ActionTypes.SET_ERROR]: jest.fn(),
      [ActionTypes.RESET_ERROR]: jest.fn(),
      [ActionTypes.SUBMIT_FORM]: jest.fn()
    };
    store = new Vuex.Store({
      state: initialLoginState,
      actions,
      getters: { ...getters, isLoggedIn: () => false }
    });
  });

  it('should render Login component', () => {
    const wrapper = shallowMount(Login, {
      store,
      computed,
      localVue
    });
    expect(wrapper).toBeTruthy();
  });

  it('should render Login form inputs', () => {
    const wrapper = shallowMount(Login, {
      store,
      computed,
      localVue
    });
    const emailInput = wrapper.get('#email');
    const passwordInput = wrapper.get('#password');
    const submit = wrapper.get('button');

    expect(emailInput.attributes('name')).toEqual('email');
    expect(passwordInput.attributes('name')).toEqual('password');
    expect(submit.text()).toEqual('Sign in');
    wrapper.destroy();
  });

  it('should call SET_ERROR action on invalid email input', async () => {
    const wrapper = shallowMount(Login, {
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
    const wrapper = shallowMount(Login, {
      store,
      computed,
      localVue
    });

    const passwordInput = wrapper.get('#password');
    await passwordInput.setValue('1');

    expect(actions[ActionTypes.SET_ERROR]).toHaveBeenCalled();

    wrapper.destroy();
  });

  it('should call Reset error action on valid inputs', async () => {
    const wrapper = shallowMount(Login, {
      store,
      computed,
      localVue
    });

    const emailInput = wrapper.get('#email');
    await emailInput.setValue('valid@email.com');
    const passwordInput = wrapper.get('#password');
    await passwordInput.setValue('123456');

    expect(actions[ActionTypes.RESET_ERROR]).toHaveBeenCalledTimes(2);

    wrapper.destroy();
  });

  it('should call Submit actiion', async () => {
    const wrapper = shallowMount(Login, {
      store,
      computed,
      localVue
    });

    const emailInput = wrapper.get('#email');
    await emailInput.setValue('valid@email.com');
    const passwordInput = wrapper.get('#password');
    await passwordInput.setValue('123456');

    const submitBtn = wrapper.get('#submit');
    await submitBtn.trigger('submit');

    expect(actions[ActionTypes.SUBMIT_FORM]).toHaveBeenCalledTimes(1);

    wrapper.destroy();
  });
});
