import Logo from "../ui-kit/logo/logo";
import styles from "../header/header.module.scss";
import MenuDesktop from "../ui-kit/menu/menuDesktop/menuDesktop";
import MenuMobile from "../ui-kit/menu/menuMobile/menuMobile";
import {menuItems} from "../ui-kit/menu/menuMock";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <MenuDesktop menuItems={menuItems}/>
      <MenuMobile menuItems={menuItems}/>
    </div>
  )
}

export default Header;