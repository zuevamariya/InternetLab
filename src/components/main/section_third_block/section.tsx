import { FC } from "react";
import Card from "../../ui-kit/card/card";
import ThirdBlockCard from "./data";

const ThirdBlock: FC = () => {
  return(
    <Card 
      title={ThirdBlockCard.title} 
      className={ThirdBlockCard.className}
      description={ThirdBlockCard.description}
      image={ThirdBlockCard.image} 
    />
  );
};

export default ThirdBlock;