import { FC, useState } from "react";
import { CardProps } from "./type";
import clsx from "clsx";
import styles from "./card.module.scss";
import { RootState, useSelector } from "../../../services/store";
import {ReactComponent as Plus} from "../../../assets/images/section4_plus.svg";
import {ReactComponent as Cross} from "../../../assets/images/section4_cross.svg";

const Card : FC<CardProps> = ( {title, description, text, images, classNameSuffix, button } ) => {
  const device = useSelector((state: RootState) => state.device);
  const other = device.isTablet || device.isMobile || device.isSmallMobile;
  const[isOpen, setIsOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  const openItem = () => setIsOpen(true);
  const closeItem = () => setIsOpen(false);

  return(
    <div className={clsx({
      [styles[`card${classNameSuffix}Desktop`]]: classNameSuffix && device.isDesktop,
      [styles[`card${classNameSuffix}Tablet`]]: classNameSuffix && device.isTablet,
      [styles[`card${classNameSuffix}Mobile`]]: classNameSuffix && device.isMobile,
      [styles[`card${classNameSuffix}SmallMobile`]]: classNameSuffix && device.isSmallMobile,
      [styles[`card${classNameSuffix}Other`]]: classNameSuffix && other,
      [styles[`card${classNameSuffix}`]]: classNameSuffix 
    })}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      {images && (
        <div className={clsx({
          [styles.imageContainer]: true,
          [styles.imageContainerDesktop]: device.isDesktop,
          [styles.imageContainerOther]: other
        })}>
        {images && images.map((img, index) => (
          <img 
            className={styles[`image${index+1}`]} 
            key={index} 
            src={img} 
            alt={`${title}image${index+1}`} />
        ))}
        </div>
      )}
      <div className={clsx({
        [styles.textContainer]: true,
        [styles.textContainerDesktop]: device.isDesktop,
        [styles.textContainerOther]: other,
        [styles.textContainerSmallMobile]: device.isSmallMobile
      })}>
        <h4 className={clsx({
          [styles.title]: true,
          [styles.hover]: isHovered  
        })}>
          {title}
        </h4>
        {description && <div className={clsx({
          [styles.descriptionContainer]: true,
          [styles[`desc${classNameSuffix}`]]: !isOpen
          })}>
          {description.map((desc, index) => (
            <p key={index} className={styles.description}>{desc}</p>
          ))}
        </div>}
      </div>
      {text && <p className={styles.text}>{text}</p>}
      {button && <button 
          className={clsx({
            [styles.button]: true,
            [styles.hover]: isHovered
          })}
          onClick={isOpen ? closeItem : openItem}>
          {isOpen ? <Cross /> : <Plus />}
        </button>}
    </div>
  );
};

export default Card;