import { FC } from "react";
import Article from "../../ui-kit/article/article";
import HowItWorksData from "./data";

const HowItWorks: FC = () => {
  return(
    <Article
      className={HowItWorksData.className}
      title={HowItWorksData.title} 
      cards={HowItWorksData.cards}
    />
  );
};

export default HowItWorks;