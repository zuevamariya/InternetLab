import { CardProps } from "../../ui-kit/card/card";
import Background from "../../../assets/images/section2_background.png";
import Image from "../../../assets/images/section2_image.png";

const ThirdBlockCard: CardProps = {
  title: "Круто, ты дошел до третьего блока",
  className: "ThirdBlock",
  description: [
    `63% опрошенных пользовались кредитами из-за того, что не могли покрыть 
    непредвиденные расходы свыше 15 000 ₽.`,
    `Доступ к заработанным деньгам помогает отказаться от кредитов и 
    экономить деньги на процентах и штрафах.`],
  image: [Background, Image],
};

export default ThirdBlockCard;