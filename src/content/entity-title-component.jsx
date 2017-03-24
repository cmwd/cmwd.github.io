// @flow

import React from 'react';
import type { Children } from 'react';

import { Header } from '../ui';

type PropsTypeT = {
  children?: Children;
};

function EntityTitleComponent(props: PropsTypeT) {
  return (
    <Header
      className="content__entity-title"
      as="h3"
      type="subsection"
    >
      {props.children}
    </Header>
  );
}

export default EntityTitleComponent;

