import { FC, useState } from "react";
import styles from './menuDesktop.module.scss'
import { MenuDesktopProps } from "../type";

const MenuDesktop: FC<MenuDesktopProps> = ({ 
  menuItems, 
  activeLink, 
  handleClickItem 
}) => {

  return (
    <nav>
      <ul className={styles.list}>
        {Object.entries(menuItems).map(([key, value]) => (
          <li key={key} onClick={() => handleClickItem(key)}>
            <a href={`#${key}`} className={activeLink === key ? styles.active : ''}>
              {value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuDesktop;