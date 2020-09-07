import { shallowMount } from '@vue/test-utils';
import Login from '.';

describe('Login.vue tests', () => {
  it('should render Login component', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper).toBeTruthy();
  });
});
