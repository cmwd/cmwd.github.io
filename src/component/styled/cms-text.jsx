// @flow

import React from 'react';
import styled from 'styled-components';

import type { Children } from 'react';

type PropTypesT = {
  children?: Children;
};

const Container = styled.div`
  ${props => props.theme.defaultFont}
  color: ${props => props.theme.color.primary};

  h1 {
    font-size: ${props => props.theme.fontSize.sectionTitle};
    font-weight: 300;
  }
`;

export default (props: PropTypesT) =>
  <Container dangerouslySetInnerHTML={{ __html: props.children }} />
