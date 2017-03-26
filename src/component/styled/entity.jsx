// @flow

import styled from 'styled-components';

export const EntityContainer = styled.article`
  padding: 0 0 2em;

  ${props => props.theme.screen.print`
    padding: 0 0 1em;
    page-break-inside: avoid;
  `}

  &:hover .ui__icon {
    opacity: 1;
  }
`;

export const EntityHeader = styled.h2`
  ${props => props.theme.defaultFont}
  color: ${props => props.theme.color.primary};
  font-size: ${props => props.theme.fontSize.title};
  margin-bottom: 0;
`;

export const EntityLink = styled.a`
  color: ${props => props.theme.color.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.secondary};
  }

  .ui__icon {
    font-size: 0.8em;
    margin-left: 0.4em;
    opacity: 0;
  }
`;

export const EntityDetails = styled.div`
  ${props => props.theme.defaultFont}
  color: ${props => props.theme.color.detail};
  font-size: ${props => props.theme.fontSize.secondary};
`;

export const EntityTag = styled.span`
  ${props => props.theme.defaultFont}
  color: ${props => props.theme.color.extra};
  font-size: ${props => props.theme.fontSize.secondary};
  margin-right: .3em;
  cursor: default;

  &:before {
    content: "#";
    padding-right: .1em;
  }

  &:after {
    content: ',';
  }

  &:last-child:after {
    content: '';
  }
`;
