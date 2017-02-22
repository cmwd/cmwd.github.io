import React, { Component } from 'react';
import 'purecss/build/base-min.css';
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';
import 'purecss/build/grids-units-min.css';

import { List, Section, JobPositions } from './content';
import Sidebar from './sidebar/sidebar-component';
import dataModel from '../data.json';

import './App.css';

class App extends Component {
  state = dataModel;

  render() {
    const {
      sidebar,
      sections,
    } = this.state;

    console.log(sections);
    return (
      <div className="container">
        <div className="pure-g">
          <Sidebar
            className="app__sidebar pure-u-md-3-8"
            {...sidebar}
          />
          <div className="app__content pure-u-md-5-8">
            {sections.map(section => (
              <Section title={section.title}>
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

