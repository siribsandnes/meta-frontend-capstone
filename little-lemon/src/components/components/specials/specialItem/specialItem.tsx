import { Link } from "react-router-dom";
import styles from "./specialItem.module.css";
import type React from "react";

interface SpecialItemProps {
  title: string;
  description: string;
  price: number;
  img: React.ReactNode;
}

const SpecialItem = ({ title, description, price, img }: SpecialItemProps) => {
  return (
    <div className={styles.specialItem}>
      {img}
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>{title}</h2> <p className={styles.price}>{price} kr</p>
        </div>

        <p>{description}</p>

        <Link className={styles.link} to="/order">
          Order a delivery
        </Link>
      </div>
    </div>
  );
};

export default SpecialItem;
