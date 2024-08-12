import { FC } from "react";
import Article from "../../ui-kit/article/article";
import FormBlockData from "./data";

const FormBlock: FC = () => {
  return(
    <Article
      title={FormBlockData.title}
      className={FormBlockData.className}
      form={FormBlockData.form}
    />
  );
};

export default FormBlock;