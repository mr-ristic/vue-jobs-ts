import { shallowMount, mount } from '@vue/test-utils';
import Login from '.';

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
});
