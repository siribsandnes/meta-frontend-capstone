import React from "react";
import Logo from "../../../assets/Logo.svg";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="Little Lemon Logo" />
      </Link>
      {props.children}
    </header>
  );
};

export default Header;
