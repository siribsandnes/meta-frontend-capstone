import { Link } from "react-router-dom";
import styles from "./specialItem.module.css";
import type React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface SpecialItemProps {
  title: string;
  description: string;
  price: number;
  img: React.ReactNode;
  href?: string;
}

const SpecialItem = ({ title, description, price, img }: SpecialItemProps) => {
  return (
    <article className={styles.specialItem}>
      {img}
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>{title}</h2> <p className={styles.price}>${price}</p>
        </div>

        <p>{description}</p>

        <Link className={styles.link} to="/order">
          Order a delivery
          <ArrowForwardIcon />
        </Link>
      </div>
    </article>
  );
};

export default SpecialItem;
