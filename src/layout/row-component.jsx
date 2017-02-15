import React from 'react';
import classNames from 'classnames';

export default function Row(props) {
  const {
    as: ElementType = 'div',
    className,
    children,
  } = props;

  const classes = classNames(
    className,
    'ui__row',
    'pure-g'
  );

  return (
    <ElementType className={classes} children={children} />
  );
}

