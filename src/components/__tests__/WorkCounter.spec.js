import { describe, expect, it, vi } from "vitest";

import { mount } from "@vue/test-utils";
import WorkCounter from "../WorkCounter.vue";

describe("WorkCounter", () => {
  it("renders properly", () => {
    const wrapper = mount(WorkCounter);
    expect(wrapper.text()).toContain("Work Counter");
  });

  it("init 1500 Seconds", () => {
    const secconds = WorkCounter.data().counter;

    expect(secconds).toEqual(1500);
  });

  it("format 3 seconds to 00:03", () => {
    const secconds = WorkCounter.methods.formattedTime(3);

    expect(secconds).toBe("00:03");
  });

  it("convert 1500 Seconds is 25 minutes", () => {
    const secconds = WorkCounter.data().counter;

    expect(secconds).toEqual(1500);

    const wrapper = mount(WorkCounter);

    expect(wrapper.text()).toContain("25:00");
  });

  it("Decrease counter with invoke start method", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });

    const wrapper = mount(WorkCounter);

    const btn = wrapper.find("button");

    await btn.trigger("click");

    await vi.advanceTimersByTime(50000);

    expect(wrapper.text()).toContain("24:10");
  });
});
