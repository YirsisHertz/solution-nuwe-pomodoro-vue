import { describe, expect, it, vi } from "vitest";

import { mount } from "@vue/test-utils";
import BreakCounter from "../BreakCounter.vue";

describe("BreakCounter", () => {
  it("renders properly", () => {
    const wrapper = mount(BreakCounter);
    expect(wrapper.text()).toContain("Break Counter");
  });

  it("init 300 Seconds", () => {
    const secconds = BreakCounter.data().counter;

    expect(secconds).toEqual(300);
  });

  it("format 5 seconds to 00:05", () => {
    const secconds = BreakCounter.methods.formattedTime(5);

    expect(secconds).toBe("00:05");
  });

  it("convert 300 Seconds is 5 minutes", () => {
    const secconds = BreakCounter.data().counter;

    expect(secconds).toEqual(300);

    const wrapper = mount(BreakCounter);

    expect(wrapper.text()).toContain("05:00");
  });

  it("Decrease counter with invoke start method", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });

    const wrapper = mount(BreakCounter);

    const btn = wrapper.find("button");

    await btn.trigger("click");

    await vi.advanceTimersByTime(50000);

    expect(wrapper.text()).toContain("04:10");
  });
});
