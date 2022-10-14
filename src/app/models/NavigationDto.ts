export namespace NavigationDto {
  export interface MenuItem {
    label: string;
    folder: string;
    tag: string;
  }

  export interface AsideGroup {
    title: string;
    menuItems: MenuItem[];
  }
}