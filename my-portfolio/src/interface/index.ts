export interface ICardsInfos {
  project_title: string;
  short_description: string;
  has_access_link: boolean;
  quick_access_link: string;
  project_on_github: string;
  screenshot: string;
}

export interface INavItems {
  itemName: string;
  hrefName: string;
}

export interface IStack {
  url: string;
  techName: string;
  predominantColorOnHover: string;
  isHovering: boolean;
}
