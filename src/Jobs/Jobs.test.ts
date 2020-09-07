import { shallowMount } from "@vue/test-utils";
import Jobs from "./";

describe("Jobs.vue tests", () => {
  it("should render Jobs component", () => {
    const wrapper = shallowMount(Jobs);
    expect(wrapper).toBeTruthy();
  });
});
