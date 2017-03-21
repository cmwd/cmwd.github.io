import React from 'react';

import EntityComponent from './entity-component';
import TagLine from './tagline-component';
import type { ProjectEntityT } from '../entity/entity-types';

export default function(props: ProjectEntityT) {
  return (
    <EntityComponent modifier="project">
      <h1>Project Component</h1>
      <TagLine tags={props.tags} />
    </EntityComponent>
  );
}
