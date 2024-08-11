import { FC } from "react";
import styles from "./cardText.module.scss";

type CardTextProps = {
  text: string;
  className?: string;
};

const CardText: FC<CardTextProps> = ({ text, className }) => {
  return(
    <p className={styles[`text${className}`]}>
      {text}
    </p>
  )
};

export default CardText;