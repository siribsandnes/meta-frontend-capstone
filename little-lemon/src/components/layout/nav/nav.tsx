import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/about">
        About
      </Link>
      <Link className={styles.link} to="/menu">
        Menu
      </Link>
      <Link className={styles.link} to="/booking">
        Booking
      </Link>
      <Link className={styles.link} to="/orderOnline">
        Order Online
      </Link>
      <Link className={styles.link} to="/login">
        Login
      </Link>
    </nav>
  );
};

export default Nav;
