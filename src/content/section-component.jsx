import React from 'react';
import classNames from 'classnames';

import { Header, TextBlock } from '../ui';

export default function Section(props) {
  const { modifier = '' } = props;

  const classes = classNames('content__section', {
    [`content__section--${modifier}`]: modifier !== ''
  });

  return (
    <section className={classes}>
      <Header
        as="h2"
        children={props.title}
        type="section"
      />
      {props.children}
    </section>
  );
}

