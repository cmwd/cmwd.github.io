// @flow

import React from 'react';

import { BulletList } from '../ui';
import EntityComponent from './entity-component';

import type { ListEntityT } from '../entity/entity-types';

export default function ListComponent({ items }: ListEntityT) {
  return (
    <EntityComponent modifier="list">
      <BulletList items={items} />
    </EntityComponent>
  );
}
