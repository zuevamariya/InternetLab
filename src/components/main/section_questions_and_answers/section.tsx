import { FC } from "react";
import Article from "../../ui-kit/article/article";
import QuestionsAndAnswersData from "./data";

const QuestionsAndAnswers: FC = () => {
  return(
    <Article
      title={QuestionsAndAnswersData.title} 
      card={QuestionsAndAnswersData.card} 
      classNameSuffix={QuestionsAndAnswersData.classNameSuffix}
    />
  );
};

export default QuestionsAndAnswers;