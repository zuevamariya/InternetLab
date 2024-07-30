import { FC } from "react";
import { CardProps } from "./type";
import clsx from "clsx";
import styles from "./card.module.scss";
import test from "node:test";

const Card : FC<CardProps> = ( {title, img, alt, description, text} ) => {
  return(
    <li className={styles.card}>
      <img  className={styles.image} src={img} alt={alt} />
      {title}
      <p className={styles.text}>{text}</p>
      <p className={styles.description}>{description}</p>
    </li>
  );
};

export default Card;