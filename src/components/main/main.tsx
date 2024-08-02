import Feedback from "./section_feedback/section";
import HowItWorks from "./section_how_it_works/section";
import ThirdBlock from "./section_third_block/section";
import style from "./main.module.scss";

const Main = () => {
  return (
    <ul className={style.container}>
      <li className={style.item}>
        <HowItWorks />
      </li>
      <li className={style.item}>
        <ThirdBlock />
      </li>
      <li className={style.itemColor}>
        <Feedback />
      </li>
    </ul> 
  )
}

export default Main;