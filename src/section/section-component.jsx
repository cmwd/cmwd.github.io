import React from 'react';
import { Column, Row } from '../layout';

export default function Section(props) {
  return (
    <Row as="section" align="left">
      <Column className="section" col="9">
        <h2 className="section__title">{props.title}</h2>
        <div className="section__content">{props.children}</div>
      </Column>
    </Row>
  );
}

