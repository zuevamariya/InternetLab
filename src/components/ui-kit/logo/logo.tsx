import { FC } from "react";
import { ReactComponent as EllipseBlue } from "../../../../src/assets/images/ellipse_blue.svg";
import { ReactComponent as EllipseGray } from "../../../../src/assets/images/ellipse_gray.svg";
import styles from './logo.module.scss';

const Logo: FC = () => {

  return (
    <div className={styles.logo}>
      <div className={styles.ellipseGroup}>
        <EllipseBlue className={styles.ellipseBlue}/>
        <EllipseGray className={styles.ellipseGray}/>
      </div>
      <span className={styles.label}>testLab</span>
    </div>
  )
}

export default Logo;