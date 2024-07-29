type TItems = Record<string, string>;

export interface MenuDesktopProps {
  menuItems: TItems;
}

export interface MenuMobileProps {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const menuItems: TItems = {
  how_it_works: 'Как это работает',
  third_block: '3-й блок',
  questions_and_answers: 'Вопросы и ответы',
  form: 'Форма'
}