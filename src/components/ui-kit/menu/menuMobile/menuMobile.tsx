import { FC, useState } from "react";
import styles from './menuMobile.module.scss'
import { MenuProps } from "../menuMock";
import {ReactComponent as MenuSymbol} from "../../../../assets/images/menu_symbol.svg";
import {ReactComponent as CrossRight} from "../../../../assets/images/cross_right.svg";
import {ReactComponent as CrossLeft} from "../../../../assets/images/cross_left.svg";
import {ReactComponent as Arrow} from "../../../../assets/images/menu_item_arrow.svg";
import clsx from "clsx";

const MenuMobile: FC<MenuProps> = ({ menuItems }) => {
  const[activeLink, setActiveLink] = useState<string | null>(null);
  const[isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickItem = (id: string) => setActiveLink(id);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <button 
        className={clsx({
          [styles.button]: true,
          [styles.menu]: true,
          [styles.hidden]: isOpen,
        })}
        onClick={() => openMenu()}>
        <MenuSymbol className={styles.symbol}/>
        <MenuSymbol className={styles.symbol}/>
      </button>
      <button
      className={clsx({
        [styles.button]: true,
        [styles.cross]: true,
        [styles.hidden]: !isOpen, 
      })}
      onClick={() => closeMenu()}>
        <CrossRight className={styles.right}/>
        <CrossLeft className={styles.left}/>
      </button>
      <nav className={isOpen ? styles.visibility : styles.hidden}>
        <ul className={styles.list}>
          {Object.entries(menuItems).map(([key, value]) => (
            <li key={key}>
              <a href={`#${key}`}
                className={activeLink === key ? styles.active : ''}
                onClick={() => handleClickItem(key)}>
                {value}
              </a>
              <Arrow />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;