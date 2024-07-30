import { FC } from "react"
import Article from "../../ui-kit/article/article";
import { HowItWorksProps } from "../../ui-kit/article/articleMock";

const HowItWorks: FC = () => {
  return(
    <Article title={HowItWorksProps.title} card={HowItWorksProps.card} />
  );
};

export default HowItWorks;