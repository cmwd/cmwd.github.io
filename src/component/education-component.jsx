// @flow

import React from 'react';

import { EntityContainer, EntityHeader, EntityDetails } from './styled/entity';

import DateRange from './date-range-component';
import type { EducationEntityT } from '../entity/entity-types';

const DATE_FORMAT = 'YYYY';

function EducationComponent(props: EducationEntityT) {
  return (
    <EntityContainer>
      <EntityDetails>
        <DateRange
          start={props.start}
          end={props.end}
          format={DATE_FORMAT}
        />
      </EntityDetails>
      <EntityHeader
        children={props.name}
      />
    </EntityContainer>
  );
}

export default EducationComponent;
