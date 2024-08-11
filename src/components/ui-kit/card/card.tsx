import { FC, ReactElement, useState } from "react";
import CardImage from "./cardImage/cardImage";
import CardTitle from "./cardTitle/cardTitle";
import styles from "./card.module.scss";
import clsx from "clsx";
import { RootState, useSelector } from "../../../services/store";
import CardDescription from "./cardDescription/cardDescription";
import CardText from "./cardText/cardText";
import CardButton from "./cardButton/cardButton";

export type TButton = {
  closedElement: ReactElement;
  openedElement: ReactElement;
};

export type CardProps = {
  title: string;
  className?: string;
  image?: string[];
  description?: string[];
  text?: string;
  button?: TButton;
};

const Card: FC<CardProps> = ({ 
    title, 
    className, 
    image, 
    description, 
    text, 
    button 
  }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const[isOpen, setIsOpen] = useState<boolean>(false);
  const device = useSelector((state: RootState) => state.device);

  const openItem = () => setIsOpen(true);
  const closeItem = () => setIsOpen(false);

  return(
    <div
      className={clsx({
        [styles[`card${className}`]]: className,
        [styles[`cardDesktop${className}`]]: device.isDesktop,
        [styles[`cardTablet${className}`]]: device.isTablet,
        [styles[`cardMobile${className}`]]: device.isMobile,
        [styles[`cardSmallMobile${className}`]]: device.isSmallMobile
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <CardImage image={image} title={title} className={className} />
      )}
      <article 
        className={clsx(styles.article, {
          [styles.articleDesktop]: device.isDesktop,
          [styles.articleTablet]: device.isTablet,
          [styles.articleMobile]: device.isMobile,
          [styles.articleSmallMobile]: device.isSmallMobile
        })}>
        <CardTitle title={title} className={className} isHovered={isHovered} />
        {description && (
          <CardDescription description={description} className={className} isOpen={isOpen} />
        )}
      </article>
      {text && (
        <CardText text={text} className={className} />
      )}
      {button && (
        <CardButton 
          closedElement={button.closedElement} 
          openedElement={button.openedElement} 
          isHovered={isHovered} 
          isOpen={isOpen} 
          closeItem={closeItem} 
          openItem={openItem} />
        )}
    </div>
  )
};

export default Card;