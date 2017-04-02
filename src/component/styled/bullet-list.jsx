// @flow

import styled from 'styled-components';

export const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  ${props => props.theme.defaultFont}
  color: ${props => props.theme.color.primary};
  position: relative;
  margin-left: 1.2em;
  font-size: ${props => props.theme.fontSize.base};

  ${props => props.theme.media.medium`
    margin-left: 0;
  `}

  &:before {
    content: '•';
    color: ${props => props.theme.color.secondary};
    position: absolute;
    left: -1em;
    font-size: 1.2em;
  }

  ${props => props.theme.screen.print`
    &:before {
      color: ${props => props.theme.color.primary};
      font-size: 1em;
    }

    margin-left: 1.2em;
  `}
`;
