import { FC } from "react";
import { CardProps } from "./type";
import clsx from "clsx";
import styles from "./card.module.scss";

const Card : FC<CardProps> = ( {title, description, text, images, classNameSuffix } ) => {
  return(
    <div className={clsx(
      styles.card,
      classNameSuffix && styles[`card${classNameSuffix}`]
    )}>
      {images ? (
        <div className={styles.imageContainer}>
        {images && images.map((img, index) => (
          <img 
            className={styles[`image${index+1}`]} 
            key={index} 
            src={img} 
            alt={`${title}image${index+1}`} />
        ))}
      </div>
      )
      :
      null}
      <div className={styles.textContainer}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.descriptionContainer}>
          {description.map((desc, index) => (
            <p key={index} className={styles.description}>{desc}</p>
          ))}
        </div>
      </div>
      {text ? (<p className={styles.text}>{text}</p>) 
        : 
        null}
    </div>
  );
};

export default Card;