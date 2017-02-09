import React from 'react';
import classNames from 'classnames';

export default function Row(props) {
  const {
    as: ElementType = 'div',
    className,
    children,
  } = props;

  const classes = classNames(className, 'layout__row');

  return (
    <ElementType className={classes} children={children} />
  );
}
