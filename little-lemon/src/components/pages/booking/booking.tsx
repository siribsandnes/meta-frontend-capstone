import BookingForm from "../../components/bookingForm/bookingForm";
import styles from "./booking.module.css";

export type BookingProps = {
  availableTimes: string[];
  dispatchAvailableTimes: React.Dispatch<string>;
};


const Booking = ({ availableTimes, dispatchAvailableTimes }: BookingProps) => {
  return (
    <div className={styles.container}>
      <h1>Reserve a table</h1>
      <hr className={styles.divider}/>
      <BookingForm availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} />
      
    </div>
  );
};

export default Booking;
