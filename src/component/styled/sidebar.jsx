// @flow

import styled from 'styled-components';

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
  padding: 0 0.1em;
  margin: 0 0.2em;
  color: ${props => props.theme.color.detail};

  &:hover {
    color: ${props => props.theme.color.secondary};
  }

  ${props => props.theme.screen.print`
    text-align: left;
    line-height: 1.5em;
    padding: 0;
    margin: 0 1em 0 ;
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
