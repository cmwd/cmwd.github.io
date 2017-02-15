import React from 'react';
import classNames from 'classnames';

export default function ColumnComponent(props) {
  const {
    as: ElementType = 'div',
    className,
    offset,
    print,
    unit = 12,
    col,
    ...rest
  } = props;
  const classes = classNames(
    className,
    'ui__column',
    {
      [`pure-u-${col}-${unit}`]: typeof col === 'number',
    }
  );

  return (
    <ElementType
      {...rest}
      className={classes}
    />
  );
}

