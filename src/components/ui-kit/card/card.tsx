import { FC } from "react";
import { CardProps } from "./type";
import clsx from "clsx";
import styles from "./card.module.scss";

const Card : FC<CardProps> = ( {title, description, text, image, classNameSuffix } ) => {
  return(
    <li className={`${styles[`card${classNameSuffix}`]}`}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      {title}
      <p className={styles.text}>{text}</p>
      <p className={styles.description}>{description}</p>
    </li>
  );
};

export default Card;