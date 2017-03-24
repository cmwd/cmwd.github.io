// @flow

import React from 'react';

import Entity from './entity-component';
import EntityTitle from './entity-title-component';
import EntityLink from './entity-link-component';
import TagLine from './tagline-component';
import { Header, TextBlock, Link } from '../ui';

import type { ProjectEntityT } from '../entity/entity-types';

export default function(props: ProjectEntityT) {
  return (
    <Entity modifier="project">
      <EntityTitle>
        <EntityLink url={props.url} name={props.name} />
      </EntityTitle>
      <TextBlock
          as="div"
          className="content__description"
          children={props.content}
        />
      <TagLine tags={props.tags} />
    </Entity>
  );
}
