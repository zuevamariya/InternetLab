import Logo from "../ui-kit/logo/logo";
import styles from "../header/header.module.scss";
import MenuDesktop from "../ui-kit/menu/menuDesktop/menuDesktop";
import MenuMobile from "../ui-kit/menu/menuMobile/menuMobile";
import {menuItems} from "../ui-kit/menu/menuMock";
import { FC } from "react";

const Header:FC = () => {
  return (
    <div className={styles.header}>
      <aside className={styles.aside}>
        <Logo />
        <MenuDesktop menuItems={menuItems} className={styles.menuDesktop}/>
        <MenuMobile menuItems={menuItems} className={styles.menuMobile}/>
      </aside>
      <article className={styles.article}>
        <h1 className={styles.title}>Говорят, никогда не поздно сменить профессию</h1>
        <p className={styles.text}>Сделай круто тестовое задание и у тебя получится</p>
        <button className={styles.button}>Проще простого!</button>
      </article>
    </div>
  )
}

export default Header;