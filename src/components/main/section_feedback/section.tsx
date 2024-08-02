import { FC, useState } from "react";
import Article from "../../ui-kit/article/article";
import { FeedbackProps } from "./articleMock";
import { ReactComponent as GrayArrowBack } from "../../../assets/images/section3_back-gray.svg";
import { ReactComponent as BlueArrowBack } from "../../../assets/images/section3_back-blue.svg";
import { ReactComponent as GrayArrowNext } from "../../../assets/images/section3_next-gray.svg";
import { ReactComponent as BlueArrowNext } from "../../../assets/images/section3_next-blue.svg";
import { ReactComponent as BluePoint } from "../../../assets/images/section3_point-blue.svg"; 
import { ReactComponent as GrayPoint } from "../../../assets/images/section3_point-gray.svg";  
import styles from "./section.module.scss";

const Feedback: FC = () => {
  const[currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = 5;

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
        <button 
          className={styles.button}
          onClick={handlePrevClick}>
          {isGrayPrevArrow ? <GrayArrowBack /> : <BlueArrowBack />}
        </button>
        <Article 
          title={FeedbackProps.title} 
          card={FeedbackProps.card} 
          classNameSuffix={FeedbackProps.classNameSuffix}
        />
        <button 
          className={styles.button}
          onClick={handleNextClick}>
          {isGrayNextArrow ? <GrayArrowNext /> : <BlueArrowNext />}
        </button>
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