import { render, screen } from "@testing-library/react";
import BookingForm from "./bookingForm";

describe("BookingForm", () => {
  it("renders static form text", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatchAvailableTimes={jest.fn()}
      />
    );

    expect(screen.getByText(/Choose Date/i)).toBeTruthy();
  });
});
