import React from 'react';
import classNames from 'classnames';

export default function ColumnComponent(props) {
  const {
    as: ElementType = 'div',
    className,
    col,
    children,
    offset,
  } = props;
  const classes = classNames(
    className,
    'layout__column',
    `layout__column--${col}`,
    {
      [`layout__column-offset--${offset}`]: typeof offset === "number",
    }
  );

  return (
    <ElementType className={classes} children={children} />
  );
}

