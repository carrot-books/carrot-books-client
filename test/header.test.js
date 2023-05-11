import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import headerVue from "../components/Header/index.vue";

describe("HeaderVue", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(headerVue);
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("has title", async () => {
  it("had a title tag", () => {
    const wrapper = mount(headerVue);

    const byId = wrapper.find("#title");
    expect(byId.element.id).toBe("title");
  });
});
