// @flow

import React from 'react';

import TextBlock from './text-block-component';

type PropTypesT = {
  items: Array<string>;
};

export default function BulletListComponent({ items }: PropTypesT) {
  return (
    <ul className="ui__bullet-list">
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
