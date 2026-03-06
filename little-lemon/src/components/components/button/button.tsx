import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

const Button = ({ children, onClick, color, type = "button", disabled = false, ariaLabel }: ButtonProps) => {
  return (
    <button 
      className={`${styles.button} ${styles[color]} ${disabled ? styles.disabledButton : ""}`} 
      onClick={onClick} 
      type={type} 
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
