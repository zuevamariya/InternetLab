export type TItems = Record<string, string>;

export interface MenuDesktopProps {
  menuItems: TItems;
}

export interface MenuMobileProps {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}