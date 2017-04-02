// @flow

import styled from 'styled-components';
import { Column } from './grid';

export const SidebarContainer = styled(Column)`
  ${props => props.theme.screen.print`
    width: 100%;
  `}
`;

export const PictureContainer = styled.div`
  ${props => props.theme.screen.print`
    display: none;
  `}

  img {
    display: block;
    width: 100%;
    height: auto;
    max-width: 9em;
    max-height: 9em;
    border-radius: 100%;
    margin: 0 auto 1em;
  }
`;

export const Link = styled.a`
  ${props => props.theme.defaultFont}
  padding: 0 0.1em;
  margin: 0 0.2em;
  color: ${props => props.theme.color.detail};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.secondary};
  }

  ${props => props.theme.screen.print`
    text-align: left;
    line-height: 1.5em;
    padding: 0;
    margin: 0 1em 0 0;

    &:after {
      content: attr(data-description);
      margin-left: 0.5em;
    }
  `}
  ${props => props.theme.showInPrintScreen(props.print)}
  ${props => props.theme.showInWebScreen(props.web)}
`;

export const LinksContainer = styled.div`
  text-align: center;

  ${props => props.theme.screen.print`
    text-align: left;
    font-size: 0.8em;
  `}

  ${props => props.theme.media.medium`
    top: 1em;
    position: sticky;
  `}
`;

export const SidebarHeader = styled.h1`
  ${props => props.theme.defaultFont}
  font-size: ${props => props.theme.fontSize.title};
  text-align: center;

  &:before {
    content: '${props => props.title}';
  }

  ${props => props.theme.screen.print`
    &:before {
      content: '${props => props.printTitle}';
      font-size: 1.6em;
    }
  `}
`;

