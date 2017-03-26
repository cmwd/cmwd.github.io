// @flow

import styled, { injectGlobal } from 'styled-components';
import { Page } from 'hedron';
import { theme } from '../../style';

export const AppGlobal = injectGlobal`
  body {
    background: ${theme.color.background};
  }
`;

export const AppContainer = styled(Page)`
  max-width: 960px;
  margin: 3em auto;
  padding: 0 1em;

  ${props => props.theme.media.small`
    padding: 0 3em;
  `}

  ${props => props.theme.screen.print`
    margin: 0 auto;
  `}
`;
