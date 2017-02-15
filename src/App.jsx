import React, { Component } from 'react';
import { Container, Column, Row } from './layout';
import { List, Section, Possition } from './content';
import Sidebar from './sidebar/sidebar-component';
import './App.css';

class App extends Component {
  render() {
    const {
      hello,
      professionalCapabilities,
      professionalExpereince,
      openSource,
      freelance,
    } = this.props;

    return (
      <Container className="App">
        <Row>
          <Column
            className="app__sidebar"
            {...hello}
            unit={8}
            col={3}
            as={Sidebar}
          />
          <Column
            className="app__content"
            unit={8}
            col={5}
          >
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
          </Column>
        </Row>
      </Container>
    );
  }
}

export default App;

