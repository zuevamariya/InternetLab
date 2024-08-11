import { FC } from "react";
import { ArticleProps } from "./type";
import Card from "../card/card";
import clsx from "clsx";
import styles from "./article.module.scss";
import { RootState, useSelector } from "../../../services/store";

const Article: FC<ArticleProps> = ({ title, card, classNameSuffix }) => {
  const device = useSelector((state: RootState) => state.device);
  const other = device.isTablet || device.isMobile || device.isSmallMobile;
  
  return (
    <article className={clsx(
      styles.article,
      styles[`article${classNameSuffix}`]
    )}>
      {title && (<h2 className={clsx({
        [styles.title]: true,
        [styles.titleDesktop]: device.isDesktop,
        [styles.titleMobile]: device.isMobile
      })}>
        {title}
      </h2>)}
      {card && (<div className={clsx({
        [styles.list]: true,
        [styles.listDesktop]: device.isDesktop,
        [styles.listTablet]: device.isTablet,
        [styles.listMobile]: device.isMobile,
        [styles.listOther]: other
      })}>
        {card.map((cardProps, index) => (
            <Card 
              key={index} 
              {...cardProps} 
              classNameSuffix={classNameSuffix}
            />
        ))}
      </div>)}
    </article>
  );
};

export default Article;