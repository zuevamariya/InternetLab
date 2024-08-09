import { FC } from "react";
import { ReactComponent as EllipseBlue } from "../../../../src/assets/images/ellipse_blue.svg";
import { ReactComponent as EllipseGray } from "../../../../src/assets/images/ellipse_gray.svg";
import styles from './logo.module.scss';
import clsx from "clsx";

type LogoProps = {
  isOpen: boolean;
}

const Logo: FC<LogoProps> = ({ isOpen }) => {

  return (
    <div className={styles.logo}>
      <div className={styles.ellipseGroup}>
        <EllipseBlue className={styles.ellipseBlue}/>
        <EllipseGray className={styles.ellipseGray}/>
      </div>
      <span className={clsx({
        [styles.label]: true,
        [styles.labelMenuOpen]: isOpen 
        })}>
        testLab
      </span>
    </div>
  )
}

export default Logo;