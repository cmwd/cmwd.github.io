// @flow

import { css } from 'styled-components';

type ScreenSizeT = '48em'|'35.5em';
type ScreenTypeT = 'screen|print';

const MEDIA = {
  small: 568,
  medium: 768,
  large: 1024,
  extraLarge: 1280,
};

const SCREEN = {
  print: 'print',
  screen: 'screen',
}

export const DEFAULT_FONT_SIZE = 16;

export const COLOR = {
  base3: '#fdf6e3',
  base2: '#eee8d5',
  base1: '#93a1a1',
  base0: '#839496',
  base00: '#657b83',
  base01: '#586e75',
  base02: '#073642',
  base03: '#002b36',

  base001: '#b58900',
  base002: '#cb4b16',
  base003: '#dc322f',
  base004: '#d33682',
  base005: '#6c71c4',
  base006: '#268bd2',
  base007: '#2aa198',
  base008: '#859900',
};

export const media = Object
  .keys(MEDIA)
  .reduce((memo, label) => {
    const emSize = MEDIA[label] / DEFAULT_FONT_SIZE;

    memo[label] = (...args: Array<any>) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)}
      }
    `;

    return memo;
  }, {});

export const screen = Object
  .keys(SCREEN)
  .reduce((memo, label) => {
    memo[label] = (...args: Array<any>) => css`
      @media ${SCREEN[label]} {
        ${css(...args)}
      }
    `;

    return memo;
  }, {});

export const text = css`
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: 300;
  letter-spacing: initial;
  ${screen.print`
    font-family: Helvetica, Arial, sans-serif;
  `}
`;

