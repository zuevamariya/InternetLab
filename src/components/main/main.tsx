import Feedback from "./section_feedback/section";
import HowItWorks from "./section_how_it_works/section";
import ThirdBlock from "./section_third_block/section";
import styles from "./main.module.scss";
import { FC } from "react";
import clsx from "clsx";
import { RootState, useSelector } from "../../services/store";
import QuestionsAndAnswers from "./section_questions_and_answers/section";
import CreditInfo from "./section_credit_info/section";
import FormBlock from "./section_form_block/section";

const Main: FC = () => {
  const device = useSelector((state: RootState) => state.device);
  const other = device.isTablet || device.isMobile || device.isSmallMobile;

  const style = {
    [styles.itemDesktop]: device.isDesktop,
    [styles.itemOther]: other
  }

  return (
    <main className={styles.container}>
      <section id="how_it_works" className={clsx(style)}>
        <HowItWorks />
      </section>
      <section id="third_block" className={clsx(style)}>
        <ThirdBlock />
      </section>
      <section className={styles.itemColor}>
        <div className={clsx(style)}>
          <Feedback />
        </div>
      </section>
      <section id="questions_and_answers" className={clsx(style)}>
        <QuestionsAndAnswers/>
      </section>
      <section className={styles.itemColor}>
        <div className={clsx(style)}>
          <CreditInfo />
        </div>
      </section>
      <section id="form" className={clsx(style)}>
        <FormBlock />
      </section>
    </main> 
  )
};

export default Main;