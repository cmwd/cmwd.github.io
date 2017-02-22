import React, { Component } from 'react';

import { TextBlock } from '../ui';

export default function ListComponent(props) {
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

