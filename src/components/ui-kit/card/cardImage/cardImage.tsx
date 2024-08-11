import clsx from "clsx";
import { FC } from "react";
import styles from "./cardImage.module.scss";
import { RootState, useSelector } from "../../../../services/store";

type CardImageProps = {
  image: string[];
  title: string;
  className?: string;
};

const CardImage: FC<CardImageProps> = ({ image, title, className }) => {
  const device = useSelector((state: RootState) => state.device);

  return(
    <div className={clsx({
      [styles[`imageDesktop${className}`]]: device.isDesktop,
      [styles[`imageTablet${className}`]]: device.isTablet,
      [styles[`imageMobile${className}`]]: device.isMobile,
      [styles[`imageSmallMobile${className}`]]: device.isSmallMobile
    })}>
    {image.map((img, index) => (
      <img 
        className={styles[`image${index+1}`]} 
        key={index} 
        src={img} 
        alt={`${title}image${index+1}`} />
    ))}
    </div>
  )
};

export default CardImage;