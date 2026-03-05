import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, color, type = "button" }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
