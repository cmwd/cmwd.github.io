// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';

import List from './component/list-component';
import Position from './component/position-component';
import Education from './component/education-component';
import Project from './component/project-component';
import CMS from './component/cms-component';
import Sidebar from './component/sidebar-component';

import { AppContainer } from './component/styled/app';
import {
  Category,
  CategoryHeader,
  Categories,
} from './component/styled/category';
import { Grid } from './component/styled/grid';
import { theme } from './style';

import 'purecss/build/base-min.css';

import type { SidebarEntityT, SectionT } from './entity/entity-types';

type PropTypes = {
  sidebar: SidebarEntityT,
  sections: Array<SectionT>,
};

function AppComponent({ sidebar, sections }: PropTypes) {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Grid>
          <Sidebar {...sidebar} />
          <Categories medium={8}>
            {sections.map(({ items, category }) => (
              <Category {...category} key={category.slug}>
                <CategoryHeader children={category.name} />
                {items.map((item, index) => {
                  if (typeof item.layout !== 'string') {
                    return null;
                  }

                  switch(item.layout) {
                    case 'LIST':
                      return <List {...item} key={index} />;
                    case 'POSITION':
                      return <Position {...item} key={index} />;
                    case 'PROJECT':
                      return <Project {...item} key={index} />;
                    case 'EDUCATION':
                      return <Education {...item} key={index} />;
                    default:
                      return <CMS {...item} key={index} />;
                  }

                })}
              </Category>
            ))}
          </Categories>
        </Grid>
      </AppContainer>
    </ThemeProvider>
  );
}

export default AppComponent;
