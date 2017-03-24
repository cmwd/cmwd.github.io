// @flow

import React from 'react';
import { format } from 'date-fns';

import Entity from './entity-component';
import EntityLink from './entity-link-component';
import EntityTitle from './entity-title-component';
import TagLine from './tagline-component';
import { TextBlock, Link, DateRange, DetailsBar } from '../ui';

import type { PositionEntityT } from '../entity/entity-types';


export default function PositionComponent(props: PositionEntityT) {
  return (
    <Entity modifier="position">
      <header>
        <EntityTitle>
          <span>{`${props.position} at `}</span>
          <EntityLink url={props.url} name={props.companyName} />
        </EntityTitle>
        <DetailsBar>
          <DateRange start={props.start} end={props.end} />
          {props.location}
        </DetailsBar>
      </header>
      <TextBlock
        as="div"
        className="content__description"
        children={props.content}
      />
    <TagLine tags={props.tags} />
    </Entity>
  );
}

PositionComponent.defaultProps = {
  tags: []
};

