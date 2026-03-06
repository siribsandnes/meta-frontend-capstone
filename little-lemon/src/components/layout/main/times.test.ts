import { initializeTimes, updateTimes } from "./times";

describe("times helpers", () => {
  it("initializeTimes returns the correct expected times", () => {
    expect(initializeTimes()).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  it("updateTimes returns the same value provided in state", () => {
    const currentState = ["17:00", "18:00"];
    expect(updateTimes(currentState, "")).toEqual(currentState);
  });
});
