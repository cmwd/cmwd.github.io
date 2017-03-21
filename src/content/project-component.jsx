import React from 'react';

import EntityComponent from './entity-component';
import TagLine from './tagline-component';
import { Header, TextBlock, Link } from '../ui';

import type { ProjectEntityT } from '../entity/entity-types';

export default function(props: ProjectEntityT) {
  return (
    <EntityComponent modifier="project">
      <h1>Project Component</h1>
      <TextBlock
          as="div"
          className="content__description"
          children={props.content}
        />
      <TagLine tags={props.tags} />
    </EntityComponent>
  );
}
