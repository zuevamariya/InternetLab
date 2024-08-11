import { FC } from "react";
import styles from "./title.module.scss";
import clsx from "clsx";
import { RootState, useSelector } from "../../../services/store";

type TitleProps = {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  const device = useSelector((state: RootState) => state.device);

  return(
    <h2 className={clsx({
      [styles.title]: true,
      [styles.titleDesktop]: device.isDesktop,
      [styles.titleTablet]: device.isTablet,
      [styles.titleMobile]: device.isMobile,
      [styles.titleSmallMobile]: device.isSmallMobile
    })}>
      {title}
    </h2>
  )
};

export default Title;