import BookingForm from "../../components/bookingForm/bookingForm";
import styles from "./booking.module.css";
const Booking = () => {
  return (
    <div className={styles.container}>
      <h1>Reserve a table</h1>
      <BookingForm />
    </div>
  );
};

export default Booking;
