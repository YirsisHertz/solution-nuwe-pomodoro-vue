import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Pomodoro from "../Pomodoro.vue";

describe("Pomodoro", () => {
  it("renders properly", () => {
    const wrapper = mount(Pomodoro);
    expect(wrapper.text()).toContain("Pomodoro App");
  });
});
