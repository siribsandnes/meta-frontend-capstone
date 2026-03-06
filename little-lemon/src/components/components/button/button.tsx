import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({ children, onClick, color, type = "button", disabled = false }: ButtonProps) => {
  return (
    <button 
      className={`${styles.button} ${styles[color]} ${disabled ? styles.disabledButton : ""}`} 
      onClick={onClick} 
      type={type} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
