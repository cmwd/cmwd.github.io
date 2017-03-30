// @flow

import React from 'react';

import { EntityContainer, EntityHeader, EntityDetails } from './styled/entity';
import CMSText from './styled/cms-text';

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
      <CMSText
        children={props.content}
      />
    </EntityContainer>
  );
}

export default EducationComponent;
