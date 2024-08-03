import Feedback from "./section_feedback/section";
import HowItWorks from "./section_how_it_works/section";
import ThirdBlock from "./section_third_block/section";
import styles from "./main.module.scss";
import { MainProps } from "./type";
import { FC } from "react";
import clsx from "clsx";

const Main:FC<MainProps> = ({ deviceType }) => {
  const style = {
    [styles.itemDesktop]: deviceType.isDesktop,
    [styles.itemTablet]: deviceType.isTablet,
    [styles.itemMobile]: deviceType.isMobiles
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
}

export default Main;