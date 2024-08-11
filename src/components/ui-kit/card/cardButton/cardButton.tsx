import clsx from "clsx";
import { FC, ReactElement } from "react";
import styles from "./cardButton.module.scss";

type CardButtonProps = {
  openedElement: ReactElement;
  closedElement: ReactElement;
  isHovered: boolean;
  isOpen: boolean;
  closeItem: () => void;
  openItem: () => void;
};

const CardButton: FC<CardButtonProps> = ({ 
  openedElement,
  closedElement, 
  isHovered,
  isOpen,
  openItem,
  closeItem
  }) => {

  return(
    <button 
      className={clsx(styles.button, {
        [styles.hoverButton]: isHovered
      })}
      onClick={isOpen ? closeItem : openItem}>
      {isOpen ? openedElement : closedElement}
    </button>
  )
};

export default CardButton;