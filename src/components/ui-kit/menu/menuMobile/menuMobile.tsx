import { FC } from "react";
import styles from './menuMobile.module.scss'
import {ReactComponent as Arrow} from "../../../../assets/images/menu_item_arrow.svg";
import clsx from "clsx";
import { MenuMobileProps } from "../type";

const MenuMobile: FC<MenuMobileProps> = ({ 
  isOpen, 
  menuItems, 
  handleClickItem 
}) => {
  
  return (
    isOpen && (
      <nav className={clsx(isOpen ? styles.visibility : styles.hidden)}>
        <ul className={styles.list}>
          {Object.entries(menuItems).map(([key, value]) => (
            <li key={key} onClick={() => handleClickItem(key)}>
              <a href={`#${key}`}>
                {value}
              </a>
              <Arrow />
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default MenuMobile;