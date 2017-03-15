// @flow

import React, { Component } from 'react';
import 'purecss/build/base-min.css';
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';
import 'purecss/build/grids-units-min.css';

import { List, Section, Position } from './content';
import Sidebar from './sidebar/sidebar-component';

import './App.css';

type PropTypes = {
  files: Array<File>,
  categories: Array<Category>
};

const layouts = {
  list: List,
  position: Position,
};

const getCategoryItems = (files, categoryId) =>
  files.reduce((memo, file) => {
    if (file.categoryId !== categoryId) { return memo }

    let component = layouts[file.layout] || Section;

    return [...memo, { file, component }];
  }, []);

const AppSidebar = ({ sidebar }) =>
  !sidebar ? null :
    (<Sidebar
        className="app__sidebar pure-u-md-3-8"
        {...sidebar}
      />);

function AppComponent(props: PropTypes) {
  const { files, categories } = props;
  const sidebar = files.find(file => file.layout === 'sidebar');

  return (
    <div className="container">
      <div className="pure-g">
        <AppSidebar sidebar={sidebar} />
        <div className="app__content pure-u-md-5-8">
          {categories.map((category, index) =>
            <Section
              title={category.name}
              modifier={category.modifier}
              key={category.categoryId}
              children={
                getCategoryItems(files, category.categoryId)
                  .map(({ file, component: Component }) =>
                    <Component {...file} key={file.fileName} />)}
                  />
          )}
        </div>
      </div>
    </div>
  );
}

AppComponent.defaultProps = {
  files: [],
  categories: [],
};

export default AppComponent;

