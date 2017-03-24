// @flow

import React, { Component } from 'react';
import 'purecss/build/base-min.css';
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';
import 'purecss/build/grids-units-min.css';

import { List, Section, Education, Position, Project, CMS } from './content';
import Sidebar from './sidebar/sidebar-component';

import './App.css';
import type { SidebarEntityT, SectionT } from './entity/entity-types';

type PropTypes = {
  sidebar: SidebarEntityT,
  sections: Array<SectionT>,
};

const layouts = {
  CMS: CMS,
  LIST: List,
  POSITION: Position,
  PROJECT: Project,
  EDUCATION: Education,
};

function ItemComponent({ layout, ...rest }) {
  const Component = layouts[layout];

  return <Component {...rest} />
}

function AppComponent({ sidebar, sections }: PropTypes) {
  return (
    <div className="container">
      <div className="pure-g">
        <Sidebar
          className="app__sidebar pure-u-md-3-8"
          {...sidebar}
        />
        <div className="app__content pure-u-md-5-8">
          {sections.map(({ items, category }) => (
            <Section
                title={category.name}
                modifier={category.modifier}
                key={category.slug}
                children={items.map((item, index) => (
                  <ItemComponent {...item} key={index} />
                ))}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppComponent;
