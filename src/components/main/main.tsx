import Feedback from "./section_feedback/section";
import HowItWorks from "./section_how_it_works/section";
import ThirdBlock from "./section_third_block/section";
import styles from "./main.module.scss";
import { FC } from "react";
import clsx from "clsx";
import { RootState, useSelector } from "../../services/store";
import QuestionsAndAnswers from "./section_questions_and_answers/section";
import CreditInfo from "./section_credit_info/section";

const Main: FC = () => {
  const device = useSelector((state: RootState) => state.device);
  const other = device.isTablet || device.isMobile || device.isSmallMobile;

  const style = {
    [styles.itemDesktop]: device.isDesktop,
    [styles.itemOther]: other
  }

  return (
    <ul className={styles.container}>
      <li id="how_it_works" className={clsx(style)}>
        <HowItWorks />
      </li>
      <li id="third_block" className={clsx(style)}>
        <ThirdBlock />
      </li>
      <li className={styles.itemColor}>
        <div className={clsx(style)}>
          <Feedback />
        </div>
      </li>
      <li id="questions_and_answers" className={clsx(style)}>
        <QuestionsAndAnswers/>
      </li>
      <li className={styles.itemColor}>
        <div className={clsx(style)}>
          <CreditInfo />
        </div>
      </li>
      <li id="form" className={clsx(style)}>
        //
      </li>
    </ul> 
  )
};

export default Main;