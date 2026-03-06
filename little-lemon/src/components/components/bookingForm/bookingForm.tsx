import styles from "./bookingForm.module.css";
import Button from "../button/button";
import { useState } from "react";
import type { BookingProps } from "../../pages/booking/booking";
import { submitAPI } from "../../../mockAPI/mockAPI";
import { useNavigate } from "react-router-dom";
import {
  isValidBookingForm,
  type BookingFormData,
} from "./bookingForm.validation";

const BookingForm = ({ availableTimes, dispatchAvailableTimes }: BookingProps) => {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");

    const [formData, setFormData] = useState<BookingFormData>({
      date: "",
      time: "",
      guests: 1,
      occasion: "",
      specialRequests: "",
    });

  const handleChange = (variable: keyof BookingFormData, value: string | number) => {
    const newFormData = {
      ...formData,
      [variable]: value
    };


    setFormData(newFormData);
    setSubmitError("");
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = submitAPI(formData);
    if (result) {      
      navigate("/confirmedBooking");
      return;
    }
    setSubmitError("We could not complete your booking right now. Please try again.");
  }


    return (
      <form className={styles.bookingForm} aria-label="Restaurant table reservation form" onSubmit={handleSubmit}>
        {submitError ? (
          <p className={styles.errorText} role="alert" aria-live="assertive">
            {submitError}
          </p>
        ) : null}
        <div style={{display: "flex", flexDirection: "column"}}>
          <label 
            htmlFor="res-date"
            className={styles.label}
          >
            Choose Date *
          </label>
          <input 
            type="date" 
            id="res-date" 
            name="date"
            required
            className={styles.input}
            value={formData.date}
            onChange={
              (e) => {
                handleChange("date", e.target.value);
                dispatchAvailableTimes(e.target.value);
              }
            }
          />
        </div>

        <div style={{display: "flex", flexDirection: "column"}}>
          <label 
            htmlFor="res-time"
            className={styles.label}
          >
            Choose a time *
          </label>
          <select 
            id="res-time"
            name="time"
            required
            className={styles.select}
            onChange={(e) => handleChange("time", e.target.value)}
            value={formData.time}
          >
            <option value="" disabled>
              Select a time
            </option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div style={{display: "flex", flexDirection: "column"}}>
          <label 
            htmlFor="guests"
            className={styles.label}
          >
            Number of guests *
          </label>
          <input  
            type="number"
            id="guests"
            name="guests"
            required
            min="1"
            max="10"
            aria-describedby="guests-help"
            className={styles.input}
            onChange={(e) => handleChange("guests", parseInt(e.target.value))}
            value={formData.guests}
          />
          <small id="guests-help" className={styles.helpText}>
            Maximum 10 guests per reservation
          </small>
        </div>

        <div style={{display: "flex", flexDirection: "column"}}>
          <label 
            htmlFor="occasion"
            className={styles.label}
          >
            Occasion
          </label>
          <select 
            id="occasion"
            name="occasion"
            className={styles.select}
            onChange={(e) => handleChange("occasion", e.target.value)}
            value={formData.occasion}
          >
            <option value="">
              Select an occasion (optional)
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <div style={{display: "flex", flexDirection: "column"}}>
          <label 
            htmlFor="special-requests"
            className={styles.label}
          >
            Special Requests
          </label>
          <textarea
            id="special-requests"
            name="specialRequests"
            rows={4}
            placeholder="Any special dietary requirements or seating preferences?"
            aria-describedby="requests-help"
            className={styles.textarea}
            onChange={(e) => handleChange("specialRequests", e.target.value)}
            value={formData.specialRequests}
          />
          <small id="requests-help" className={styles.helpText}>
            Optional: Let us know about any special requirements
          </small>
        </div>

        <Button
     color="secondary"
     type="submit"
        disabled={!isValidBookingForm(formData)}
        >
          Reserve table
        </Button>
        <small id="submit-help" className={styles.helpText}>
          * Required fields
        </small>
      </form>
    );
};  

export default BookingForm;
