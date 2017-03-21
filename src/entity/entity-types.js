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
};

export type ListEntityT = {
  layout: 'LIST';
  categorySlug: string;
  items: Array<string>;
};

export type ProjectEntityT = {
  layout: 'PROJECT';
  categorySlug: string;
  content: string;
  title: string;
  url: string;
  tags: Array<string>;
};

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
