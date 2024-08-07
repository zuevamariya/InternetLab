import Feedback from "./section_feedback/section";
import HowItWorks from "./section_how_it_works/section";
import ThirdBlock from "./section_third_block/section";
import styles from "./main.module.scss";
import { FC } from "react";
import clsx from "clsx";
import { RootState, useSelector } from "../../services/store";

const Main: FC = () => {
  const device = useSelector((state: RootState) => state.device);

  const style = {
    [styles.itemDesktop]: device.isDesktop,
    [styles.itemTablet]: device.isTablet,
    [styles.itemMobile]: device.isMobile,
  }

  return (
    <ul className={styles.container}>
      <li className={clsx(style)}>
        <HowItWorks />
      </li>
      <li className={clsx(style)}>
        <ThirdBlock />
      </li>
      <li className={styles.itemColor}>
        <div className={clsx(style)}>
          <Feedback />
        </div>
      </li>
      <li className={clsx(style)}>
        //
      </li>
      <li className={styles.itemColor}>
        <div className={clsx(style)}>
          //
        </div>
      </li>
      <li className={clsx(style)}>
        //
      </li>
    </ul> 
  )
};

export default Main;