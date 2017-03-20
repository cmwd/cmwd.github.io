// @flow

import React from 'react';

import { TextBlock } from '../ui';
import type { ListEntityT } from '../entity/entity-types';

export default function ListComponent(props: ListEntityT) {
  const { items } = props;

  return (
    <ul className="content__list">
      {items.map((item, index) => (
        <TextBlock
          bullet
          as="li"
          key={index}
          children={item}
        />
      ))}
    </ul>
  );
}
