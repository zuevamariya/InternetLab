import Logo from "../ui-kit/logo/logo";
import styles from "../header/header.module.scss";
import MenuDesktop from "../ui-kit/menu/menuDesktop/menuDesktop";
import MenuMobile from "../ui-kit/menu/menuMobile/menuMobile";
import {menuItems} from "../ui-kit/menu/menuMock";
import { FC, useEffect, useState } from "react";
import {ReactComponent as MenuSymbol} from "../../assets/images/menu_symbol.svg";
import {ReactComponent as CrossRight} from "../../assets/images/cross_right.svg";
import {ReactComponent as CrossLeft} from "../../assets/images/cross_left.svg";
import clsx from "clsx";
import { RootState, useSelector } from "../../services/store";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[activeLink, setActiveLink] = useState<string | null>(null);
  const device = useSelector((state: RootState) => state.device);

  const handleClickItem = (id: string) => {
    setActiveLink(id);
    setIsOpen(false);
    const block = document.querySelector(`#${id}`);
    if (block) {
      block.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (device.isDesktop) {
      setIsOpen(false);
    };
  }, [device]);

  return (
    <>
      {device.isDesktop ? (
        <div className={clsx(
          styles.header, 
          styles.headerDesktop
        )}>
          <aside className={clsx(
            styles.aside,
            styles.asideDesktop
          )}>
            <Logo isOpen={isOpen}/>
            <MenuDesktop 
              menuItems={menuItems}
              activeLink={activeLink}
              handleClickItem={handleClickItem} />
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
          [styles.header]: true,
          [styles.headerTablet]: device.isTablet || device.isMobile,
          [styles.headerMobile]: device.isSmallMobile
        })}>
          <aside className={clsx({
            [styles.aside]: true,
            [styles.asideOther]: true,
            [styles.asideMenuOpen]: isOpen
          })}>
            <Logo isOpen={isOpen}/>
            {isOpen ? (
              <button
                className={clsx(
                  styles.menuButton,
                  styles.cross
                )}
                onClick={closeMenu}>
                <CrossRight className={styles.right}/>
                <CrossLeft className={styles.left}/>
              </button>
            ) : (
              <button
                className={clsx(
                  styles.menuButton,
                  styles.menu
                )}
              onClick={openMenu}>
              <MenuSymbol className={styles.symbol}/>
              <MenuSymbol className={styles.symbol}/>
            </button>)}
          </aside>
          {isOpen && (
            <div className={styles.headerDropDown}>
              <MenuMobile 
                isOpen={isOpen}
                menuItems={menuItems}
                handleClickItem={handleClickItem}/>
            </div>
          )}
            <article className={styles.article}>
              <h1 className={clsx({
                [styles.title]: true,
                [styles.titleTablet]: device.isTablet,
                [styles.titleMobile]: device.isMobile
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
        </div>
      )}
    </>
  );
};

export default Header;