import { FC, useState } from "react";
import styles from './menuMobile.module.scss'
import {ReactComponent as MenuSymbol} from "../../../../assets/images/menu_symbol.svg";
import {ReactComponent as CrossRight} from "../../../../assets/images/cross_right.svg";
import {ReactComponent as CrossLeft} from "../../../../assets/images/cross_left.svg";
import clsx from "clsx";
import { MenuMobileProps } from "../menuMock";

const MenuMobile: FC<MenuMobileProps> = ({ isOpen, openMenu, closeMenu }) => {
  
  return (
    <>
      {isOpen ? 
      (<button
        className={clsx({
          [styles.button]: true,
          [styles.cross]: true
        })}
        onClick={closeMenu}>
        <CrossRight className={styles.right}/>
        <CrossLeft className={styles.left}/>
      </button>)
      :
      (<button
        className={clsx({
          [styles.button]: true,
          [styles.menu]: true
        })}
        onClick={openMenu}>
        <MenuSymbol className={styles.symbol}/>
        <MenuSymbol className={styles.symbol}/>
      </button>)}
    </>
  );
};

export default MenuMobile;