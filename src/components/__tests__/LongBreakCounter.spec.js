import { describe, expect, it, vi } from "vitest";

import { mount } from "@vue/test-utils";
import LongBreakCounter from "../LongBreakCounter.vue";

describe("LongBreakCounter", () => {
  it("renders properly", () => {
    const wrapper = mount(LongBreakCounter);
    expect(wrapper.text()).toContain("Long Break Counter");
  });

  it("init 900 Seconds", () => {
    const secconds = LongBreakCounter.data().counter;

    expect(secconds).toEqual(900);
  });

  it("format 5 seconds to 00:05", () => {
    const secconds = LongBreakCounter.methods.formattedTime(5);

    expect(secconds).toBe("00:05");
  });

  it("convert 900 Seconds is 15 minutes", () => {
    const secconds = LongBreakCounter.data().counter;

    expect(secconds).toEqual(900);

    const wrapper = mount(LongBreakCounter);

    expect(wrapper.text()).toContain("15:00");
  });

  it("Decrease counter with invoke start method", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });

    const wrapper = mount(LongBreakCounter);

    const btn = wrapper.find("button");

    await btn.trigger("click");

    await vi.advanceTimersByTime(50000);

    expect(wrapper.text()).toContain("14:10");
  });
});
