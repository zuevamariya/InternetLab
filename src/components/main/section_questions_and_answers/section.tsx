import { FC } from "react";
import Article from "../../ui-kit/article/article";
import QuestionsAndAnswersData from "./data";

const QuestionsAndAnswers: FC = () => {
  return(
    <Article
      className={QuestionsAndAnswersData.className}
      title={QuestionsAndAnswersData.title} 
      cards={QuestionsAndAnswersData.cards}      
    />
  );
};

export default QuestionsAndAnswers;