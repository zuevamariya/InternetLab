import { CardProps } from "../../ui-kit/card/card";
import Image1 from "../../../assets/images/section1_1.png";
import Image2 from "../../../assets/images/section1_2.png";
import Image3 from "../../../assets/images/section1_3.png";
import Image4 from "../../../assets/images/section1_4.png";

const HowItWorksCard: CardProps[] = [
  { 
    title: "Прочитай задание внимательно", 
    description: ["Думаю у тебя не займет это больше двух-трех минут"],
    image: [Image1],
  },
  { 
    title: "Изучи весь макет заранее", 
    description: [`Подумай как это будет работать на разных разрешениях 
      и при скролле`],
    image: [Image2],
  },
  { 
    title: "Сделай хорошо", 
    description: ["Чтобы мы могли тебе доверить подобные задачи в будущем"],
    image: [Image3],
  },
  { 
    title: "Получи предложение", 
    description: [`Ну тут все просто, не я придумал правила, но думаю 
      так и будет)))`],
    image: [Image4],
  },
];

const HowItWorksData = {
  className: "HowItWorks",
  title: "Как это работает",
  cards: HowItWorksCard
};

export default HowItWorksData;