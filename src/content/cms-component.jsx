// @flow

import React from 'react';

import Entity from './entity-component';
import { TextBlock } from '../ui';
import type { CMST } from '../entity/entity-types';

function CMSComponent(props: CMST) {
  return (
    <Entity modifier="education">

      <TextBlock
        as="div"
        className="content__description"
        children={props.content}
      />
    </Entity>
  );
}

export default CMSComponent;

