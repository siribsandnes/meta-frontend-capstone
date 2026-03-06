import { initializeTimes, updateTimes } from "./times";
import { fetchAPI } from "../../../mockAPI/mockAPI";

describe("times helpers", () => {
  it("initializeTimes returns available times for today", () => {
    expect(initializeTimes()).toEqual(fetchAPI(new Date()));
  });

  it("updateTimes returns the same value provided in state", () => {
    const currentState = ["17:00", "18:00"];
    expect(updateTimes(currentState, "")).toEqual(currentState);
  });

  it("updateTimes returns available times for selected date", () => {
    const selectedDate = "2026-03-06";
    expect(updateTimes([], selectedDate)).toEqual(fetchAPI(new Date(selectedDate)));
  });
});
