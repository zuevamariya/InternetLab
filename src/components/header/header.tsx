import Logo from "../ui-kit/logo/logo";
import styles from "../header/header.module.scss";
import MenuDesktop from "../ui-kit/menu/menuDesktop/menuDesktop";
import MenuMobile from "../ui-kit/menu/menuMobile/menuMobile";
import {menuItems} from "../ui-kit/menu/menuMock";
import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import {ReactComponent as Arrow} from "../../assets/images/menu_item_arrow.svg";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const[, setActiveLink] = useState<string | null>(null);

  const handleClickItem = (id: string) => {
    setActiveLink(id);
  }
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const handleResize = () => {
    const mobileView = window.innerWidth < 769;
    setIsMobile(mobileView);
    if (!mobileView) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className={clsx(isOpen ? styles.headerMobile : styles.header)}>
          <aside className={styles.aside}>
            <Logo />
            <MenuMobile isOpen={isOpen} openMenu={openMenu} closeMenu={closeMenu} />
          </aside>
          {isOpen ? (
            <nav className={clsx(isOpen ? styles.visibility : styles.hidden)}>
              <ul className={styles.list}>
                {Object.entries(menuItems).map(([key, value]) => (
                  <li key={key}>
                    <a href={`#${key}`} onClick={() => handleClickItem(key)}>
                      {value}
                    </a>
                    <Arrow />
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <article className={styles.article}>
              <h1 className={styles.title}>Говорят, никогда не поздно сменить профессию</h1>
              <p className={styles.text}>Сделай круто тестовое задание и у тебя получится</p>
              <button className={styles.button}>Проще простого!</button>
            </article>
          )}
        </div>
      ) : (
        <div className={styles.header}>
          <aside className={styles.aside}>
            <Logo />
            <MenuDesktop menuItems={menuItems} />
          </aside>
          <article className={styles.article}>
            <h1 className={styles.title}>Говорят, никогда не поздно сменить профессию</h1>
            <p className={styles.text}>Сделай круто тестовое задание и у тебя получится</p>
            <button className={styles.button}>Проще простого!</button>
          </article>
        </div>
      )}
    </>
  );
};

export default Header;