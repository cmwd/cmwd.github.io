import React from 'react';
import classNames from 'classnames';

export default function ColumnComponent(props) {
  const {
    as: ElementType = 'div',
    className,
    col,
    children,
    offset,
    print,
    ...rest
  } = props;
  const classes = classNames(
    className,
    'layout__column',
    `layout__column--${col}`,
    {
      [`layout__column-offset--${offset}`]: typeof offset === 'number',
      [`layout__column-print--${print}`]: typeof print === 'number',
    }
  );

  return (
    <ElementType
      {...rest}
      className={classes}
      children={children}
    />
  );
}

