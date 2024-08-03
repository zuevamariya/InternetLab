import Logo from "../ui-kit/logo/logo";
import styles from "../header/header.module.scss";
import MenuDesktop from "../ui-kit/menu/menuDesktop/menuDesktop";
import MenuMobile from "../ui-kit/menu/menuMobile/menuMobile";
import {menuItems} from "../ui-kit/menu/menuMock";
import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import {ReactComponent as Arrow} from "../../assets/images/menu_item_arrow.svg";
import { HeaderProps } from "./type";

const Header: FC<HeaderProps> = ({ deviceType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const[, setActiveLink] = useState<string | null>(null);
  const desktop = deviceType === "desktop";
  const tablet = deviceType === "tablet";
  const mobile = deviceType === "mobile" || "smallMobile";

  const handleClickItem = (id: string) => {
    setActiveLink(id);
  };

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (desktop) {
      setIsOpen(false);
    };
  }, [deviceType]);

  return (
    <>
      {desktop ? (
        <div className={clsx(
          styles.header, 
          styles.headerDesktop
        )}>
          <aside className={clsx(
            styles.aside,
            styles.asideDesktop
          )}>
            <Logo />
            <MenuDesktop menuItems={menuItems} />
          </aside>
          <article className={styles.article}>
            <h1 className={clsx(
              styles.title,
              styles.titleDesktop
            )}>
              Говорят, никогда не поздно сменить профессию
            </h1>
            <p className={clsx(
              styles.text,
              styles.textDesktop
            )}>
              Сделай круто тестовое задание и у тебя получится
            </p>
            <button className={styles.button}>
              Проще простого!
            </button>
          </article>
        </div>
      ) : (
        <div className={clsx({
          [styles.header]: !isOpen,
          [styles.headerDropDown]: isOpen,
          [styles.headerTablet]: !isOpen && tablet,
          [styles.headerMobile]: !isOpen && mobile
        })}>
          <aside className={clsx(
            styles.aside,
            styles.asideOther
          )}>
            <Logo />
            <MenuMobile 
              isOpen={isOpen} 
              openMenu={openMenu} 
              closeMenu={closeMenu} 
            />
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
              <h1 className={clsx({
                [styles.title]: true,
                [styles.titleTablet]: tablet,
                [styles.titleMobile]: mobile
              })}>
                Говорят, никогда не поздно сменить профессию
              </h1>
              <p className={clsx(
                styles.text,
                styles.textOther
              )}>
                Сделай круто тестовое задание и у тебя получится
              </p>
              <button className={styles.button}>
                Проще простого!
              </button>
            </article>
          )}
        </div>
      )}
    </>
  );
};

export default Header;