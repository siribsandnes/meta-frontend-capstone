import { fetchAPI } from "../../../mockAPI/mockAPI";

export const initializeTimes = (): string[] => {
  return fetchAPI(new Date());
};

export const updateTimes = (
  state: string[],
  selectedDate: string,
): string[] => {
  if (!selectedDate) {
    return state;
  }

  return fetchAPI(new Date(selectedDate));
};
