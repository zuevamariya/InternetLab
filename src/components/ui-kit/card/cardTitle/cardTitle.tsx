import clsx from "clsx";
import { FC } from "react";
import styles from "./cardTitle.module.scss";

type CardTitleProps = {
  title: string;
  className?: string;
  isHovered?: boolean;
};

const CardTitle: FC<CardTitleProps> = ({ title, className, isHovered }) => {

  return(
    <h4 className={clsx(
      styles.title,
      className && styles[`title${className}`],
      className && isHovered && styles[`hover${className}`]
    )}>
    {title}
    </h4>
  )
};

export default CardTitle;