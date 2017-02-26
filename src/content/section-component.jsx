import React from 'react';

import { Header, TextBlock } from '../ui';

export default function Section(props) {
  return (
    <section className="content__section">
      <Header
        as="h2"
        children={props.title}
        type="section"
      />
      {props.children}
    </section>
  );
}

