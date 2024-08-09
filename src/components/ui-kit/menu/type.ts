export type TItems = Record<string, string>;

export type MenuDesktopProps = {
  menuItems: TItems;
  activeLink: string | null;
  handleClickItem: (id: string) => void;
}

export type MenuMobileProps = {
  isOpen: boolean;
  menuItems: TItems;
  handleClickItem: (id: string) => void;
}