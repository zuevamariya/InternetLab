import clsx from "clsx";
import { FC } from "react";
import styles from "./cardDescription.module.scss";

type CardDescriptionProps = {
  description: string[];
  className?: string;
  isOpen?: boolean;
};

const CardDescription: FC<CardDescriptionProps> = ({ description, className, isOpen }) => {
  return(
    <div className={clsx({
      [styles[`description${className}`]]: className,
      [styles[`hiddenText${className}`]]: !isOpen
    })}>
      {description.map((desc, index) => (
        <p 
          key={index} 
          className={styles.description}>
          {desc}
        </p>
      ))}
    </div>
  )
};

export default CardDescription;