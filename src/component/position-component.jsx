// @flow

import React from 'react';

import { EntityContainer, EntityHeader, EntityDetails } from './styled/entity';
import CMSText from './styled/cms-text';
import EntityLink from './entity-link-component';
import TagLine from './tagline-component';
import DateRange from './date-range-component';

import type { PositionEntityT } from '../entity/entity-types';


export default function PositionComponent(props: PositionEntityT) {
  return (
    <EntityContainer>
      <header>
        <EntityHeader>
          <span>{`${props.position} at `}</span>
          <EntityLink url={props.url} name={props.companyName} />
        </EntityHeader>
        <EntityDetails>
          <DateRange start={props.start} end={props.end} />
          <span>{` / ${props.location}`}</span>
        </EntityDetails>
      </header>
      <CMSText children={props.content} />
      <TagLine tags={props.tags} />
    </EntityContainer>
  );
}

PositionComponent.defaultProps = {
  tags: []
};
