export const initializeTimes = (): string[] => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state: string[], selectedDate: string): string[] => {
  if (!selectedDate) {
    return state;
  }

  return initializeTimes();
};
