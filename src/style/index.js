// @flow

import { css } from 'styled-components';

import {
  COLORS_SET,
  BASE_FONT_SIZE,
  MEDIA,
  fontFamily,
  printFontFamily,
} from './variables';

const SCREEN = {
  print: 'print',
  screen: 'screen',
}

const media = Object
  .keys(MEDIA)
  .reduce((memo, label) => {
    const emSize = MEDIA[label] / BASE_FONT_SIZE;

    memo[label] = (...args: Array<any>) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)}
      }
    `;

    return memo;
  }, {});

const screen = Object
  .keys(SCREEN)
  .reduce((memo, label) => {
    memo[label] = (...args: Array<any>) => css`
      @media ${SCREEN[label]} {
        ${css(...args)}
      }
    `;

    return memo;
  }, {});

const defaultFont = css`
  ${fontFamily}
  font-weight: 300;
  letter-spacing: initial;
  line-height: 1.5em;
  ${screen.print`
    ${printFontFamily}
  `}
`;

/**
 * @TODO move to helpers
 */

const showInPrintScreen = (showInPrint: boolean) => showInPrint ? null :
  screen.print`
    display: none;
  `;

/**
 * @TODO move to helpers
 */

const showInWebScreen = (showInWeb: boolean) => showInWeb ? null :
  screen.screen`
    display: none;
  `;

export const theme = {
  color: COLORS_SET,
  defaultFont,
  fontSize: {
    sectionTitle: '1.5em',
    title: '1.3em',
    base: '1em',
    secondary: '0.8em',
  },
  media,
  screen,
  showInWebScreen,
  showInPrintScreen
};
