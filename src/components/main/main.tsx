import Feedback from "./section_feedback/section";
import HowItWorks from "./section_how_it_works/section";
import ThirdBlock from "./section_third_block/section";
import styles from "./main.module.scss";
import { MainProps } from "./type";
import { FC } from "react";
import clsx from "clsx";

const Main:FC<MainProps> = ({ deviceType }) => {

  return (
    <ul className={styles.container}>
      <li className={clsx({
        [styles.itemDesktop]: deviceType.isDesktop,
        [styles.itemTablet]: deviceType.isTablet,
        [styles.itemMobile]: deviceType.isMobiles
      })}>
        <HowItWorks />
      </li>
      <li className={clsx({
        [styles.itemDesktop]: deviceType.isDesktop,
        [styles.itemTablet]: deviceType.isTablet,
        [styles.itemMobile]: deviceType.isMobiles
      })}>
        <ThirdBlock />
      </li>
      <li className={styles.itemColor}>
        <div className={clsx({
        [styles.itemDesktop]: deviceType.isDesktop,
        [styles.itemTablet]: deviceType.isTablet,
        [styles.itemMobile]: deviceType.isMobiles
      })}>
          <Feedback />
        </div>
      </li>
      <li className={clsx({
        [styles.itemDesktop]: deviceType.isDesktop,
        [styles.itemTablet]: deviceType.isTablet,
        [styles.itemMobile]: deviceType.isMobiles
      })}>
        //
      </li>
      <li className={styles.itemColor}>
        <div className={clsx({
        [styles.itemDesktop]: deviceType.isDesktop,
        [styles.itemTablet]: deviceType.isTablet,
        [styles.itemMobile]: deviceType.isMobiles
      })}>
          //
        </div>
      </li>
      <li className={clsx({
        [styles.itemDesktop]: deviceType.isDesktop,
        [styles.itemTablet]: deviceType.isTablet,
        [styles.itemMobile]: deviceType.isMobiles
      })}>
        //
      </li>
    </ul> 
  )
}

export default Main;