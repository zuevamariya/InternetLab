import { FC } from "react";
import Card from "../../ui-kit/card/card";
import { ThirdBlockCard } from "./cardMock";

const ThirdBlock: FC = () => {
  return(
    <Card 
      title={ThirdBlockCard.title} 
      description={ThirdBlockCard.description}
      images={ThirdBlockCard.images} 
      classNameSuffix={ThirdBlockCard.classNameSuffix}
    />
  );
};

export default ThirdBlock;