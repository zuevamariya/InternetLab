import { FC, useEffect, useState } from "react";
import Article from "../../ui-kit/article/article";
import FeedbackData from "./mock";
import { ReactComponent as GrayArrowBack } from "../../../assets/images/section3_back-gray.svg";
import { ReactComponent as BlueArrowBack } from "../../../assets/images/section3_back-blue.svg";
import { ReactComponent as GrayArrowNext } from "../../../assets/images/section3_next-gray.svg";
import { ReactComponent as BlueArrowNext } from "../../../assets/images/section3_next-blue.svg";
import { ReactComponent as BluePoint } from "../../../assets/images/section3_point-blue.svg"; 
import { ReactComponent as GrayPoint } from "../../../assets/images/section3_point-gray.svg";  
import styles from "./section.module.scss";
import { RootState, useSelector } from "../../../services/store";

const Feedback: FC = () => {  
  const device = useSelector((state: RootState) => state.device);
  const[currentSlide, setCurrentSlide] = useState<number>(0);
  const [cardsPerSlide, setCardsPerSlide] = useState<number>(1);

  const totalCards = FeedbackData.card.length;
  const totalSlides = Math.ceil(totalCards / cardsPerSlide);

  const handleResize = () => {
    if (device.isMobile) {
      setCardsPerSlide(1);
    } else if (device.isTablet) {
      setCardsPerSlide(2);
    } else {
      setCardsPerSlide(3);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [device]);

  const handlePrevClick = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const handleNextClick = () => {
    if (currentSlide < (totalSlides - 1)) setCurrentSlide(currentSlide + 1)
  };

  const isGrayNextArrow = (currentSlide === totalSlides - 1);
  const isGrayPrevArrow = (currentSlide === 0);

  return(
    <div className={styles.container}>
      <div className={styles.slider}>
        {device.isDesktop && <button 
          className={styles.button}
          onClick={handlePrevClick}
          disabled={isGrayPrevArrow}>
          {isGrayPrevArrow ? <GrayArrowBack /> : <BlueArrowBack />}
        </button>}
        <Article 
          title={FeedbackData.title} 
          card={FeedbackData.card.slice(currentSlide * cardsPerSlide, (currentSlide + 1) * cardsPerSlide)}
          classNameSuffix={FeedbackData.classNameSuffix}
        />
        {device.isDesktop && <button 
          className={styles.button}
          onClick={handleNextClick}
          disabled={isGrayNextArrow}>
          {isGrayNextArrow ? <GrayArrowNext /> : <BlueArrowNext />}
        </button>}
      </div>
      <ul className={styles.points}>
        {Array(totalSlides).fill(null).map((_, index) => (
          <li key={index}>
            {index === currentSlide ? <BluePoint /> : <GrayPoint />}
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default Feedback;