import { FC } from "react";
import { CardProps } from "./type";
import clsx from "clsx";
import styles from "./card.module.scss";
import { RootState, useSelector } from "../../../services/store";

const Card : FC<CardProps> = ( {title, description, text, images, classNameSuffix } ) => {
  const device = useSelector((state: RootState) => state.device);
  const other = device.isTablet || device.isMobile || device.isSmallMobile;

  return(
    <div className={clsx({
      [styles[`card${classNameSuffix}Desktop`]]: classNameSuffix && device.isDesktop,
      [styles[`card${classNameSuffix}Other`]]: classNameSuffix && other,
      [styles[`card${classNameSuffix}Tablet`]]: classNameSuffix && device.isTablet,
      [styles[`card${classNameSuffix}Mobile`]]: classNameSuffix && device.isMobile,
      [styles[`card${classNameSuffix}SmallMobile`]]: classNameSuffix && device.isSmallMobile,
      [styles[`card${classNameSuffix}`]]: classNameSuffix     
    })}>
      {images ? (
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
      ) : null}
      <div className={clsx({
        [styles.textContainer]: true,
        [styles.textContainerDesktop]: device.isDesktop,
        [styles.textContainerOther]: other,
        [styles.textContainerSmallMobile]: device.isSmallMobile
      })}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.descriptionContainer}>
          {description.map((desc, index) => (
            <p key={index} className={styles.description}>{desc}</p>
          ))}
        </div>
      </div>
      {text && (<p className={styles.text}>{text}</p>)}
    </div>
  );
};

export default Card;