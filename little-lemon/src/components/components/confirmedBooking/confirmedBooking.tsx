import styles from "./confirmedBooking.module.css";

const ConfirmedBooking = () => {
    return (
        <div className={styles.container}> 
            <h1>Booking Confirmed!</h1>
            <p>Thank you for your reservation. We look forward to welcoming you at Little Lemon!</p>
        </div>
    );
};

export default ConfirmedBooking;