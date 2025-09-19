import { MenuItem, Select, TextField } from "@mui/material";
import styles from "./bookingForm.module.css";
import Button from "../button/button";


const BookingForm = () => {
    return (
      <form className={styles.bookingForm}>
        <TextField label="Choose date" type="date" id="res-date" />

        <Select label="Choose a time" id="res-time ">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </Select>
        <TextField
          label="Number of guests"
          type="number"
          id="guests"
          inputProps={{ min: 1, max: 10 }}
        />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         // value={age}
          label="Occasion"
         // onChange={handleChange}
        >
          <MenuItem value="Birthday">Birthday</MenuItem>
          <MenuItem value="Anniversary">Anniversary</MenuItem>

        </Select>
        <TextField
          type="text"
          label="Special Requests"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <Button color="secondary">Reserve table</Button>
      </form>
    );
};  

export default BookingForm;
