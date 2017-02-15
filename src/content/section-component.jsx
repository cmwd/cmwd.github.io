import React from 'react';

import { Header, TextBlock } from '../ui';
import { Column, Row } from '../layout';

export default function Section(props) {
  return (
    <section className="content__section">
      <Header
        as="h2"
        children={props.title}
      />
      <TextBlock
        as="div"
        children={props.children}
      />
    </section>
  );
}

