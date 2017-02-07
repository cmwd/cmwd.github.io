import React from 'react';
import classNames from 'classnames';

export default function Container(props) {
  const {
    as: ElementType = 'div',
    className,
    children,
  } = props;
  const classes = classNames('layout__container', className);

  return (
    <ElementType className={classes} children={children} />
  );
}

