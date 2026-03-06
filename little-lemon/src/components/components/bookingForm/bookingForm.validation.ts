export type BookingFormData = {
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequests: string;
};

export const isValidDate = (date: string): boolean => {
  return Boolean(date);
};

export const isValidTime = (time: string): boolean => {
  return Boolean(time);
};

export const isValidGuests = (guests: number): boolean => {
  return Number.isInteger(guests) && guests >= 1 && guests <= 10;
};

export const isValidBookingForm = (formData: BookingFormData): boolean => {
  return (
    isValidDate(formData.date) &&
    isValidTime(formData.time) &&
    isValidGuests(formData.guests)
  );
};