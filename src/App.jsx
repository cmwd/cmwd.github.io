import React, { Component } from 'react';
import 'purecss/build/base-min.css';
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';
import 'purecss/build/grids-units-min.css';

import { List, Section, JobPositions } from './content';
import Sidebar from './sidebar/sidebar-component';

import './App.css';

class App extends Component {
  static defaultProps = {
    sections: [],
  };

  render() {
    const {
      sidebar,
      sections,
    } = this.props;

    return (
      <div className="container">
        <div className="pure-g">
          <Sidebar
            className="app__sidebar pure-u-md-3-8"
            {...sidebar}
          />
          <div className="app__content pure-u-md-5-8">
            {sections.map((section, index) => (
              <Section title={section.title} key={index}>
                { section.list
                  ? <List items={section.list} />
                  : <JobPositions {...section} />
                }
              </Section>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

