import { FC, useEffect, useState } from "react";
import styles from './menuMobile.module.scss'

const MenuMobile: FC = () => {
  const[activeLink, setActiveLink] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveLink(id);
  }

  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <a
            href="#how_it_works"
            className={activeLink === "how_it_works" ? styles.active : ""}
            onClick={()=> handleClick("how_it_works")}
          >
            Как это работает
          </a>
        </li>
        <li>
          <a
            href="#third_block"
            className={activeLink === "third_block" ? styles.active : ""}
            onClick={()=> handleClick("third_block")}
          >
            3-й блок
          </a>
        </li>
        <li>
          <a
            href="#questions_and_answers"
            className={activeLink === "questions_and_answers" ? styles.active : ""}
            onClick={()=> handleClick("questions_and_answers")}
          >
            Вопросы и ответы
          </a>
        </li>
        <li>
          <a
            href="#form"
            className={activeLink === "form" ? styles.active : ""}
            onClick={()=> handleClick("form")}
          >
            Форма
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;