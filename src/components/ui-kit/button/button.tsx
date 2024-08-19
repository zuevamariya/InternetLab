import { FC } from "react";
import styles from "./button.module.scss";

type TButton = "submit" | "button" | "reset";

type ButtonProps = {
  text: string;
  type?: TButton;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ text, type="button", disabled=false }) => {
  return(
    <button className={styles.button} type={type} disabled={disabled}>
      {text}
    </button>
  )
};

export default Button;