// @flow

import React from 'react';
import styled from 'styled-components';

import type { Children } from 'react';
import type { VisibilityT } from '../../entity/entity-types';

type PropTypesT = {
  visibility?: VisibilityT;
  children?: Children;
};

const visibleInPrint = (props) =>
  !props.visibility || props.visibility !== 'PRINT'
    ? null
    : props.theme.screen.screen`
      display: none;
    `;

const visibileInScreen = (props) =>
  !props.visibility || props.visibility !== 'SCREEN'
    ? null
    : props.theme.screen.print`
      display: none;
    `;

const CategoryTag = styled.section`
    ${visibileInScreen}
    ${visibleInPrint}
  `;

export const Category = (props: PropTypesT) =>
  <CategoryTag visibility={props.visibility} children={props.children} />

