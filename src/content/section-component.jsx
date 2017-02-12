import React from 'react';

import { Header, TextBlock } from '../ui';
import { Column, Row } from '../layout';

export default function Section(props) {
  return (
    <Row as="section" align="left">
      <Column className="content__section" col="9" offset={1} print={12}>
        <Header
          as="h2"
          children={props.title}
        />
        <TextBlock
          as="div"
          children={props.children}
        />
      </Column>
    </Row>
  );
}

