import { FC } from "react";
import styles from "./article.module.scss";
import Title from "../title/title";
import CardsContainer from "../cardsContainer/cardsContainer";
import { CardProps } from "../card/card";
import UserForm from "../userForm/userForm";

export type ArticleProps = {
  className: string;
  title?: string;
  cards?: CardProps[];
  form?: boolean;
};

const Article: FC<ArticleProps> = ({ title, cards, className, form }) => {
  
  return (
    <article className={styles.article}>
      {title && (
        <Title title={title}/>
      )}
      {cards && (
        <CardsContainer cards={cards} className={className} />  
      )}
      {form && (
        <UserForm />
      )}
    </article>
  );
};

export default Article;