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
    } = this.props;

    return (
      <Container className="App">
        <Grid>
          <Row>
            <Column col="4">
              <Sidebar {...hello} />
            </Column>
            <Column col="8">
              <Section title={professionalCapabilities.title}>
                <List items={professionalCapabilities.items} />
              </Section>
              <Section title={professionalExpereince.title}>{
                professionalExpereince.items.map((item, index) => (
                  /* @todo add identifier */
                  <Possition {...item} key={index} />
                ))
              }</Section>
            </Column>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default App;

