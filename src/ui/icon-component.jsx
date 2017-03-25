// @flow

import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
  ${props => console.log(props) || !props.iconLeftMargin ? null : `
    margin-left: ${props.iconLeftMargin};
  `}
  ${props => !props.iconSize ? null : `
    font-size: ${props.iconSize};
  `}
`;

function IconComponent(props) {
  const {
    as: ElementType = 'i',
    iconName,
    iconLeftMargin = null,
    iconSize = null,
    ...rest,
  } = props;

  return (
    <Icon
      {...rest}
      className={`fa fa-${iconName}`}
      iconLeftMargin={iconLeftMargin}
      iconSize={iconSize}
      aria-hidden
    />
  );
}

export default IconComponent;

