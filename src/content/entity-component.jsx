// @flow

import React from 'react';
import styled from 'styled-components';
import type { Children } from 'react';

import { media, screen } from '../style';

type PropTypesT = {
  children?: Children;
};

const Entity = styled.article`
  padding: 0 0 2em;

  ${screen.print`
    padding: 0 0 1em;
    page-break-inside: avoid;
  `}

  &:hover .ui__icon {
    opacity: 1;
  }
`;

export default function EntityComponent(props: PropTypesT) {
  return (
    <Entity
      children={props.children}
    />
  );
}
