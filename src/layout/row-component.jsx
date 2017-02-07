import React from 'react';
import classNames from 'classnames';

export default function Row(props) {
  const {
    as: ElementType = 'div',
    className,
    children,
    align
  } = props;

  const classes = classNames(className, 'layout__row', {
    [`layout__row--align-${align}`]: typeof align === 'string',
  });

  return (
    <ElementType className={classes} children={children} />
  );
}

