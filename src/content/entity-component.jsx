// @flow

import React from 'react';
import type { Children } from 'react';

type PropTypesT = {
  children?: Children;
  modifier: string;
};

export default function EntityComponent(props: PropTypesT) {
  return (
    <article
      className={`content__entity content__entity--${props.modifier}`}
      children={props.children}
    />
  );
}
