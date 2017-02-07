import React, { Component } from 'react';
import { Container, Column, Grid, Row } from './layout';
import Sidebar from './sidebar/sidebar-component';
import Section from './section/section-component';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Grid>
          <Row>
            <Column col="3">
              <Sidebar />
            </Column>
            <Column col="9">
              <Section title="hello world">
                some text
              </Section>
            </Column>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default App;

