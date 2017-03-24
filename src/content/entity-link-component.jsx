// @flow

import React from 'react';

import { Link } from '../ui';

type PropsTypesT = {
  url: string;
  name: string;
};

const SLUG_REGEX = /[\s\.]/g;
const toSlug = (value = '') =>
  value.replace(SLUG_REGEX, '_').toLowerCase();

function EntityLinkComponent(props: PropsTypesT) {
  return (
    <Link
      className="content__entity-link"
      href={props.url}
      iconName="external-link"
      iconAppend
      gaLabel={toSlug(props.name)}
      children={props.name}
    />
  )
}

export default EntityLinkComponent;

