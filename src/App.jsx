import React, { Component } from 'react';

import { List, Section, Possition } from './content';
import Sidebar from './sidebar/sidebar-component';
import dataModel from '../data.json';

import './App.css';

class App extends Component {
  state = dataModel;

  render() {
    const {
      hello,
      professionalCapabilities,
      professionalExpereince,
      openSource,
      freelance,
    } = this.state;

    return (
      <div className="container">
        <div className="pure-g">
          <Sidebar
            className="app__sidebar pure-u-md-3-8"
            {...hello}
          />
          <div className="app__content pure-u-md-5-8">
            <Section title={professionalCapabilities.title}>
              <List items={professionalCapabilities.items} />
            </Section>
            {[
              professionalExpereince,
              openSource,
              freelance,
            ].map((section, index) => (
              <Section
                title={section.title}
                key={index}
                children={section.items.map((item, index) => (
                  <Possition {...item} key={index}/>
                ))}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

