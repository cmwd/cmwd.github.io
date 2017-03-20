// @flow

import type {
  SidebarEntityT,
  CategoryEntityT,
  SectionEntityT,
  SectionT
} from './entity-types';

const sectionsSorter = (a: SectionT, b: SectionT) =>
  b.category.order - a.category.order;

export default function normalizer(data: any) {
  const sidebar: SidebarEntityT = data.sidebar;
  const sections: Array<SectionT> = Object
    .keys(data.sections.categories)
    .map((k) => {
      const category: CategoryEntityT = data.sections.categories[k];
      const items: Array<SectionEntityT> = Object
        .keys(data.sections.items)
        .map((k) => ({
          ...data.sections.items[k],
          layout: data.sections.items[k].layout.toUpperCase(),
        }))
        .filter(item => item.categorySlug === category.slug);

      return { items, category };
    })
    .sort(sectionsSorter);

  return { sidebar, sections };
}
