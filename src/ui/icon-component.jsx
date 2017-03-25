// @flow

import React from 'react';
import styled from 'styled-components';


function IconComponent(props) {
  const {
    iconName,
    ...rest,
  } = props;

  return (
    <i
      {...rest}
      className={`ui__icon fa fa-${iconName}`}
      aria-hidden
    />
  );
}

export default IconComponent;

