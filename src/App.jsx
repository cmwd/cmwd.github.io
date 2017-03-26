// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'purecss/build/base-min.css';
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';
import 'purecss/build/grids-units-min.css';

import List from './component/list-component';
import Position from './component/position-component';
import Education from './component/education-component';
import Project from './component/project-component';
import CMS from './component/styled/cms-text';
import Sidebar from './component/sidebar-component';
import { AppContainer } from './component/styled/app';
import { SectionHeader } from './component/styled/header';
import { theme } from './style';

import type { SidebarEntityT, SectionT } from './entity/entity-types';

type PropTypes = {
  sidebar: SidebarEntityT,
  sections: Array<SectionT>,
};

function AppComponent({ sidebar, sections }: PropTypes) {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <div className="pure-g">
          <Sidebar {...sidebar} />
          <div className="pure-u-md-5-8">
            {sections.map(({ items, category }) => (

              <section
                key={category.slug}
              >
                <SectionHeader>{category.name}</SectionHeader>
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
              </section>
            ))}
          </div>
        </div>
      </AppContainer>
    </ThemeProvider>
  );
}

export default AppComponent;
