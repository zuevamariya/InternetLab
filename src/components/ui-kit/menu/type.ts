export type TItems = Record<string, string>;

export type MenuDesktopProps = {
  menuItems: TItems;
}

export type MenuMobileProps = {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}