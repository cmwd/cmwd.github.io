import React from 'react';
import classNames from 'classnames';

export default function ColumnComponent(props) {
  const {
    as: ElementType = 'div',
    className,
    col,
    children,
  } = props;
  const classes = classNames(
    className,
    'layout__column',
    `layout__column--${col}`
  );

  return (
    <ElementType className={classes} children={children} />
  );
}

