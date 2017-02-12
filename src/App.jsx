import React, { Component } from 'react';
import { Container, Column, Grid, Row } from './layout';
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
        <Grid>
          <Row>
            <Column
              {...hello}
              col="4"
              as={Sidebar}
            />
            <Column col="8">
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
        </Grid>
      </Container>
    );
  }
}

export default App;

