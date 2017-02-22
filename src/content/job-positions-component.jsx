import React from 'react';
import classNames from 'classnames';

import Position from './job-position-component';

export default function JobPositions(props) {
  const {
    as: ElementType = 'div',
    entries,
  } = props;

  return (
    <ElementType className="content__entries">
      {entries.map((entry, index) => <Position key={index} {...entry} />)}
    </ElementType>
  );
}

