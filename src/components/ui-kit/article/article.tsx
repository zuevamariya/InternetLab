import { FC } from "react";
import { ArticleProps } from "./type";
import Card from "../card/card";
import clsx from "clsx";
import styles from "./article.module.scss";

const Article: FC<ArticleProps> = ({ title, card }) => {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {card.map((cardProps, index) => (
          <Card key={index} {...cardProps} />
        ))}
      </ul>
    </article>
  );
};

export default Article;