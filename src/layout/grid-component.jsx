import React from 'react';
import classNames from 'classnames';

export default function Grid(props) {
  const {
    children,
    className,
    as: ElementType = 'div'
  } = props;
  const classes = classNames(className, 'layout__grid');

  return (
    <ElementType className={classes} children={children} />
  );
}

