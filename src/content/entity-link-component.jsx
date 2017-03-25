// @flow

import React from 'react';
import styled from 'styled-components';

import { Link } from '../ui';
import { COLOR } from '../style';

type PropsTypesT = {
  url: string;
  name: string;
};

const SLUG_REGEX = /[\s\.]/g;
const toSlug = (value = '') =>
  value.replace(SLUG_REGEX, '_').toLowerCase();

const EntityLink = styled(Link)`
  color: ${COLOR.base02};
`;

function EntityLinkComponent(props: PropsTypesT) {
  return (
    <EntityLink
      iconLeftMargin="0.4em"
      iconSize="0.8em"
      href={props.url}
      iconName="external-link"
      iconAppend
      gaLabel={toSlug(props.name)}
      children={props.name}
    />
  )
}

export default EntityLinkComponent;

