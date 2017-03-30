// @flow

import React from 'react';

import { EntityContainer, EntityHeader } from './styled/entity';
import CMSText from './styled/cms-text';
import EntityLink from './entity-link-component';
import TagLine from './tagline-component';

import type { ProjectEntityT } from '../entity/entity-types';

export default function(props: ProjectEntityT) {
  return (
    <EntityContainer>
      <EntityHeader>
        <EntityLink url={props.url} name={props.name} />
      </EntityHeader>
      <CMSText {...props} children={props.content} />
      <TagLine tags={props.tags} />
    </EntityContainer>
  );
}
