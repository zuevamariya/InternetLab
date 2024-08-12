import clsx from "clsx";
import { FC } from "react";
import styles from "./cardButtonToggle.module.scss";
import { ReactComponent as Plus } from "../../../../assets/images/section4_plus.svg";
import { ReactComponent as Cross } from "../../../../assets/images/section4_cross.svg";

type ToggleButtonProps = {
  isHovered: boolean;
  isOpen: boolean;
  closeItem: () => void;
  openItem: () => void;
};

const ToggleButton: FC<ToggleButtonProps> = ({
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
      {isOpen ? <Cross /> : <Plus />}
    </button>
  )
};

export default ToggleButton;