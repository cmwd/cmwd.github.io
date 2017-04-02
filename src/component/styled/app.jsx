// @flow

import styled, { injectGlobal } from 'styled-components';
import { theme } from '../../style';

export const AppGlobal = injectGlobal`
  body {
    background: ${theme.color.background};
    font-size: ${theme.fontSize.screenBase};

    ${theme.screen.print`
      font-size: ${theme.fontSize.printBase};
      background: #fff;
    `}
  }

  * {
    box-sizing: border-box;
  }
`;

export const AppContainer = styled.div`
  max-width: 960px;
  margin: 2em auto;
  padding: 0 1em;

  ${props => props.theme.media.small`
    padding: 0 3em;
  `}

  ${props => props.theme.screen.print`
    margin: 0 auto;
  `}
`;
