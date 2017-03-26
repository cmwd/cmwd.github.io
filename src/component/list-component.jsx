// @flow

import React from 'react';

import { EntityContainer } from './styled/entity';
import { ListContainer, ListItem } from './styled/bullet-list';

import type { ListEntityT } from '../entity/entity-types';

export default function ListComponent({ items }: ListEntityT) {
  return (
    <EntityContainer>
      <ListContainer>
        {items.map((item, index) => (
          <ListItem
            children={item}
            key={index}
          />
        ))}
      </ListContainer>
    </EntityContainer>
  );
}
