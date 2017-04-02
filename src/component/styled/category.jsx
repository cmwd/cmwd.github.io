// @flow

import styled from 'styled-components';

import { Column } from './grid';

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

export const Category = styled.section`
    ${visibileInScreen}
    ${visibleInPrint}
  `;

export const Categories = styled(Column)`
  ${props => props.theme.media.medium`
    padding-left: 4em;
  `}

  ${props => props.theme.screen.print`
    width: 100% !important;
    padding-left: 0;
    margin-top: 1.2em;
  `}
`;

export const CategoryHeader = styled.h2`
  ${props => props.theme.defaultFont}
  font-size: ${props => props.theme.fontSize.sectionTitle};
  color: ${props => props.theme.color.primary};
  margin-top: 0;
`;

