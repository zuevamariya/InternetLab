import { FC } from "react";
import { ArticleProps } from "./type";
import Card from "../card/card";
import clsx from "clsx";
import styles from "./article.module.scss";

const Article: FC<ArticleProps> = ({ title, card, classNameSuffix }) => {
  return (
    <article className={`${styles[`article${classNameSuffix}`]}`}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {card.map((cardProps, index) => (
          <li>
            <Card 
              key={index} 
              {...cardProps} 
              classNameSuffix={classNameSuffix}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Article;