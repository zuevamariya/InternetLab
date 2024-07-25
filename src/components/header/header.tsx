import Logo from "../ui-kit/logo/logo";
import styles from "../header/header.module.scss";
import MenuDesktop from "../ui-kit/menuDesktop/menuDesktop";
import MenuMobile from "../ui-kit/menuMobile/menuMobile";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <MenuDesktop />
      <MenuMobile />
    </div>
  )
}

export default Header;