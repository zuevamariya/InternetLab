import { FC } from "react";
import styles from "./footer.module.scss";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return(
    <footer>
      <p className={styles.text}>
        © {currentYear} Лаборатория интернет
      </p>
    </footer>
  )
};

export default Footer;