// @flow

import styled from 'styled-components';

const GRID_SIZE = 12;

const getWidth = (breakPoint, columns) => breakPoint`
  width: ${columns / GRID_SIZE * 100}%;
`

function processMediaQueries(props: any) {
  const { small, medium, large, extraLarge } = props;
  const sizes = { small, medium, large, extraLarge };

  return Object
    .keys(sizes)
    .reduce((memo, size) =>
      typeof sizes[size] !== 'number'
        ? memo
        : [ ...memo, getWidth(props.theme.media[size], sizes[size])], []);
}

export const Column = styled.div`
  display: inline-block;
  zoom: 1;
  letter-spacing: normal;
  word-spacing: normal;
  vertical-align: top;
  text-rendering: auto;
  ${processMediaQueries}
`;

export const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
`;

