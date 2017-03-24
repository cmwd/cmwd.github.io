// @flow

export type SidebarLinkT = {
  href: string;
  description: string;
  iconName: string;
  print?: boolean;
  gaLabel: string;
};

export type SidebarEntityT = {
  content: string;
  title: string;
  printTitle: string;
  picture: string;
  links: Array<SidebarLinkT>;
};

export type PositionEntityT = {
  layout: 'POSITION';
  content: string;
  categorySlug: string;
  position: string;
  companyName: string;
  location: string;
  start: number;
  end: number;
  dateFormat?: string;
  current: boolean;
  url: string;
  tags: Array<string>;
};

export type ListEntityT = {
  layout: 'LIST';
  categorySlug: string;
  items: Array<string>;
};

export type ProjectEntityT = {
  layout: 'PROJECT';
  name: string;
  categorySlug: string;
  content: string;
  title: string;
  url: string;
  tags: Array<string>;
};

export type EducationEntityT = {
  layout: 'EDUCATION';
  categorySlug: string;
  name: string;
  start: number;
  end: number;
};

export type CMST = {
  layout: 'CMS';
  categorySlug: string;
  content: string;
}

export type CategoryEntityT = {
  name: string;
  modifier:? string;
  order: number;
  slug: string;
};

export type SectionEntityT = PositionEntityT|ListEntityT|ProjectEntityT;

export type SectionT = {
  category: CategoryEntityT;
  items: Array<SectionEntityT>;
};
