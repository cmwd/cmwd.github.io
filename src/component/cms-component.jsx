// @flow

import React from 'react';

import CMSText from './styled/cms-text';

import type { CMST } from '../entity/entity-types';

function CMSComponent(props: CMST) {

  return (<CMSText
    {...props}
    children={props.content}
  />);
}

export default CMSComponent;
