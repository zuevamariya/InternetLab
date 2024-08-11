import { FC } from "react";
import styles from "./article.module.scss";
import Title from "../title/title";
import CardsContainer from "../cardsContainer/cardsContainer";
import { CardProps } from "../card/card";

export type ArticleProps = {
  className: string;
  title?: string;
  cards?: CardProps[];
};

const Article: FC<ArticleProps> = ({ title, cards, className }) => {
  
  return (
    <article className={styles.article}>
      {title && (
        <Title title={title}/>
      )}
      {cards && (
        <CardsContainer cards={cards} className={className} />  
      )}
    </article>
  );
};

export default Article;