// @flow

import { css } from 'styled-components';

const COLORS = {
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

export const BASE_FONT_SIZE = 16;

export const PRINT_FONT_SIZE = 12;

export const FONT_SIZES = {
  screenBase: `${BASE_FONT_SIZE}px`,
  printBase: `${PRINT_FONT_SIZE}px`,
  sectionTitle: '1.5em',
  title: '1.3em',
  base: '1em',
  secondary: '0.8em',
};

export const MEDIA = {
  small: 568,
  medium: 768,
  large: 1024,
  extraLarge: 1280,
};

export const COLORS_SET = {
  background: COLORS.base3,
  primary: COLORS.base03,
  secondary: COLORS.base002,
  detail: COLORS.base00,
  extra: COLORS.base001,
};

export const fontFamily = css`
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
`;

export const printFontFamily = css`
  font-family: Helvetica, Arial, sans-serif;
`;

