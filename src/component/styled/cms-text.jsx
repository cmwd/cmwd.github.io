// @flow

import React from 'react';
import styled, { css } from 'styled-components';

import type { Children } from 'react';

type PropTypesT = {
  centeredHeadline?: boolean;
  children?: Children;
};

const centeredHeadline = (props) => !props.centeredHeadline
  ? null
  : css`
    text-align: center;
  `;

const Container = styled.div`
  ${props => props.theme.defaultFont}
  color: ${props => props.theme.color.primary};

  h1 {
    font-size: ${props => props.theme.fontSize.sectionTitle};
    font-weight: 300;
    ${centeredHeadline}
  }
`;

export default (props: PropTypesT) =>
  <Container
    centeredHeadline={props.centeredHeadline}
    dangerouslySetInnerHTML={{ __html: props.children }}
  />
