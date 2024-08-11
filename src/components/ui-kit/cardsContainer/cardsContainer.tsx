import clsx from "clsx";
import { FC } from "react";
import styles from "./cardsContainer.module.scss";
import { RootState, useSelector } from "../../../services/store";
import Card, { CardProps } from "../card/card";

type CardsContainerProps = {
  cards: CardProps[];
  className: string;
}

const CardsContainer: FC<CardsContainerProps> = ({ cards, className }) => {
  const device = useSelector((state:RootState) => state.device);

  return(
    <div className={clsx(styles[`list${className}`], {
      [styles[`listDesktop${className}`]]: device.isDesktop,
      [styles[`listTablet${className}`]]: device.isTablet,
      [styles[`listMobile${className}`]]: device.isMobile,
      [styles[`listSmallMobile${className}`]]: device.isSmallMobile
    })}>
    {cards.map((cardProps, index) => (
      <Card
        key={index} 
        {...cardProps} 
        className={className}
      />
    ))}
  </div>
  )
};

export default CardsContainer;