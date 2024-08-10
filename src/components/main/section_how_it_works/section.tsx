import { FC } from "react";
import Article from "../../ui-kit/article/article";
import HowItWorksData from "./data";

const HowItWorks: FC = () => {
  return(
    <Article
      title={HowItWorksData.title} 
      card={HowItWorksData.card} 
      classNameSuffix={HowItWorksData.classNameSuffix}
    />
  );
};

export default HowItWorks;