// @flow

import React from 'react';

import { BulletList } from '../ui';
import Entity from './entity-component';

import type { ListEntityT } from '../entity/entity-types';

export default function ListComponent({ items }: ListEntityT) {
  return (
    <Entity>
      <BulletList items={items} />
    </Entity>
  );
}
