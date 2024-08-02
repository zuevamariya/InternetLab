import { FC } from "react";
import Article from "../../ui-kit/article/article";
import { HowItWorksProps } from "./articleMock";

const HowItWorks: FC = () => {
  return(
    <Article 
      title={HowItWorksProps.title} 
      card={HowItWorksProps.card} 
      classNameSuffix={HowItWorksProps.classNameSuffix}
    />
  );
};

export default HowItWorks;