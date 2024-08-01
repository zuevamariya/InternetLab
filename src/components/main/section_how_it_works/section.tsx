import { FC } from "react";
import Article from "../../ui-kit/article/article";
import { HowItWorksProps } from "./articleMock";
import styles from "../section.module.scss";

const HowItWorks: FC = () => {
  return(
    <div className={styles.container}>
      <Article 
        title={HowItWorksProps.title} 
        card={HowItWorksProps.card} 
        classNameSuffix={HowItWorksProps.classNameSuffix}
      />
    </div>
  );
};

export default HowItWorks;