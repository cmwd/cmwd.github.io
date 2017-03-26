// @flow

import React from 'react';

import { EntityLink } from './styled/entity';
import Analytics from '../misc/analytics-component';

type PropsTypesT = {
  url: string;
  name: string;
};

const SLUG_REGEX = /[\s\.]/g;
const toSlug = (value = '') =>
  value.replace(SLUG_REGEX, '_').toLowerCase();

function EntityLinkComponent(props: PropsTypesT) {
  return (
    <EntityLink
      href={props.url}
      gaLabel={toSlug(props.name)}
    >
      {props.name}
      <i className="ui__icon fa fa-external-link" />
    </EntityLink>
  )
}

export default Analytics(EntityLinkComponent, 'Link');
