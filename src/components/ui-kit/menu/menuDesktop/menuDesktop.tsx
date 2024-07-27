import { FC, useState } from "react";
import styles from './menuDesktop.module.scss'
import { MenuProps } from "../menuMock";

const MenuDesktop: FC<MenuProps> = ({ menuItems, className }) => {
  const[activeLink, setActiveLink] = useState<string | null>(null);

  const handleClickItem = (id: string) => {
    setActiveLink(id);
  }

  return (
    <nav className={className}>
      <ul className={styles.list}>
        {Object.entries(menuItems).map(([key, value]) => (
          <li key={key}>
            <a href={`#${key}`}
            className={activeLink === key ? styles.active : ''}
            onClick={() => handleClickItem(key)}>
              {value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MenuDesktop;