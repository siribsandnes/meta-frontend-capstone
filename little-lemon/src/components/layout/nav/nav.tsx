import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/booking">
            Booking
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/orderOnline">
            Order Online
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
