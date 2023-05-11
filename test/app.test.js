import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import appVue from "../app.vue";

describe("AppVue", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(appVue);
    expect(wrapper.vm).toBeTruthy();
  });
});
