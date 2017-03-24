// @flow

import React from 'react';

import Entity from './entity-component';
import EntityTitle from './entity-title-component';
import { DateRange, DetailsBar } from '../ui';
import type { EducationEntityT } from '../entity/entity-types';

const DATE_FORMAT = 'YYYY';

function EducationComponent(props: EducationEntityT) {
  return (
    <Entity modifier="education">
      <EntityTitle>
        {props.name}
        <DetailsBar>
          <DateRange
            start={props.start}
            end={props.end}
            format={DATE_FORMAT}
          />
        </DetailsBar>
      </EntityTitle>
    </Entity>
  );
}

export default EducationComponent;

