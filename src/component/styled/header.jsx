// @flow

import styled from 'styled-components';

export const SectionHeader = styled.h2`
  ${props => props.theme.defaultFont}
  font-size: ${props => props.theme.fontSize.sectionTitle};
  color: ${props => props.theme.color.primary};
`;
