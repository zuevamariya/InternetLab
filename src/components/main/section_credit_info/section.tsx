import { FC } from "react";
import Article from "../../ui-kit/article/article";
import CreditInfoData from "./data";

const CreditInfo: FC = () => {
  return(
    <Article
      card={CreditInfoData.card} 
      classNameSuffix={CreditInfoData.classNameSuffix}
    />
  );
};

export default CreditInfo;