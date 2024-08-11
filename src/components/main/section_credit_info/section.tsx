import { FC } from "react";
import Article from "../../ui-kit/article/article";
import CreditInfoData from "./data";

const CreditInfo: FC = () => {
  return(
    <Article
      cards={CreditInfoData.cards} 
      className={CreditInfoData.className}
    />
  );
};

export default CreditInfo;