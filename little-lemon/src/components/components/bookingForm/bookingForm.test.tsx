import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./bookingForm";
import {
  isValidBookingForm,
  isValidDate,
  isValidGuests,
  isValidTime,
} from "./bookingForm.validation";

const renderBookingForm = () => {
  return render(
    <MemoryRouter>
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatchAvailableTimes={jest.fn()}
      />
    </MemoryRouter>,
  );
};

describe("BookingForm", () => {
  it("renders static form text", () => {
    renderBookingForm();

    expect(screen.getByText(/Choose Date/i)).toBeTruthy();
  });

  it("applies date field HTML validation attributes", () => {
    renderBookingForm();

    const dateInput = screen.getByLabelText(/Choose Date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("name", "date");
  });

  it("applies time field HTML validation attributes", () => {
    renderBookingForm();

    const timeSelect = screen.getByLabelText(/Choose a time/i);
    expect(timeSelect).toHaveAttribute("required");
    expect(timeSelect).toHaveAttribute("name", "time");
  });

  it("applies guests field HTML validation attributes", () => {
    renderBookingForm();

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("name", "guests");
  });

  it("applies occasion field HTML attributes", () => {
    renderBookingForm();

    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toHaveAttribute("name", "occasion");
  });

  it("applies special requests field HTML attributes", () => {
    renderBookingForm();

    const requestsTextarea = screen.getByLabelText(/Special Requests/i);
    expect(requestsTextarea).toHaveAttribute("name", "specialRequests");
    expect(requestsTextarea).toHaveAttribute("rows", "4");
  });
});

describe("booking validation helpers", () => {
  it("isValidDate returns true for a non-empty date and false for empty", () => {
    expect(isValidDate("2026-03-06")).toBe(true);
    expect(isValidDate("")).toBe(false);
  });

  it("isValidTime returns true for a selected time and false for empty", () => {
    expect(isValidTime("17:00")).toBe(true);
    expect(isValidTime("")).toBe(false);
  });

  it("isValidGuests returns true for guests in range and false when out of range", () => {
    expect(isValidGuests(1)).toBe(true);
    expect(isValidGuests(10)).toBe(true);
    expect(isValidGuests(0)).toBe(false);
    expect(isValidGuests(11)).toBe(false);
  });

  it("isValidBookingForm returns true for valid form and false for invalid form", () => {
    const validForm = {
      date: "2026-03-06",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
      specialRequests: "Window table",
    };

    const invalidForm = {
      date: "",
      time: "",
      guests: 0,
      occasion: "",
      specialRequests: "",
    };

    expect(isValidBookingForm(validForm)).toBe(true);
    expect(isValidBookingForm(invalidForm)).toBe(false);
  });
});
