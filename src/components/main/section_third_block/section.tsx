import { FC } from "react";
import Card from "../../ui-kit/card/card";
import { ThirdBlockCard } from "./cardMock";
import styles from "../section.module.scss";

const ThirdBlock: FC = () => {
  return(
    <div className={styles.container}>
      <Card 
        title={ThirdBlockCard.title} 
        description={ThirdBlockCard.description}
        images={ThirdBlockCard.images} 
        classNameSuffix={ThirdBlockCard.classNameSuffix}
      />
    </div>
  );
};

export default ThirdBlock;