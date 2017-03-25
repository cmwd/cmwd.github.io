// @flow

import React from 'react';
import styled from 'styled-components';

type PropsTypesT = {
  iconName: string;
};

function IconComponent(props: PropsTypesT) {
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

