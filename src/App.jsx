import React, { Component } from 'react';
import 'purecss/build/base-min.css';
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';
import 'purecss/build/grids-units-min.css';

import { List, Section, Position } from './content';
import Sidebar from './sidebar/sidebar-component';

import './App.css';

const layouts = {
  list: List,
  position: Position,
};

function getCategoryItems(files, categoryId) {
  return files.reduce((memo, file) => {
    if (file.categoryId !== categoryId) { return memo }

    let component = layouts[file.layout] || Section;

    return [...memo, {file, component}];
  }, []);
}

class App extends Component {
  static defaultProps = {
    files: [],
    categories: [],
  };

  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const {
      categories,
      files,
    } = this.state;
    const sidebar = files.find(file => file.layout === 'sidebar');

    return (
      <div className="container">
        <div className="pure-g">
          {!sidebar ? null :
            <Sidebar
              className="app__sidebar pure-u-md-3-8"
              {...sidebar}
            />
          }
          <div className="app__content pure-u-md-5-8">
            {categories.map(category => (
              <Section title={category.name} key={category.categoryId}>
                {getCategoryItems(files, category.categoryId).map((item) => {
                  const {
                    file,
                    component: Component,
                  } = item;

                  return (<Component {...file} key={file.fileName} />);
                })}
              </Section>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

