import React from "react";
import Logo from "../../../assets/Logo.svg";
import styles from "./header.module.css";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Little Lemon Logo" />
      {props.children}
    </header>
  );
};

export default Header;
