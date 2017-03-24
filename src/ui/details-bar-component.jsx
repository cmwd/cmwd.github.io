// @flow

import React from 'react';
import type { Children } from 'react';
import { isUndefined, last } from 'lodash';

import TextBlock from './text-block-component';

type Components = Children|Array<Children>;
type PropTypesT = {
  children: Components;
  splitter: Children;
};

const defaultSplitter = () => (<span>{` / `}</span>);

const joiner = (components: Components, Splitter: Children): Array<Children> =>
  !Array.isArray(components)
    ? components
    : components
    .filter(c => !isUndefined(c))
    .reduce((memo, component, index, collection) => {
      memo.push(component);

      if (component !== last(collection)) {
        memo.push(<Splitter key={index} />)
      }

      return memo;
    }, []);

export default function DetailsBarComponent(props: PropTypesT) {
  return (<TextBlock
    secondary
    plain
    className="ui__details-bar"
    as="span"
    children={joiner(props.children, props.splitter)}
  />);
}

DetailsBarComponent.defaultProps = {
  splitter: defaultSplitter,
};
